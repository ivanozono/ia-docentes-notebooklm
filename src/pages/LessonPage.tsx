import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  Alert,
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography
} from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import FullscreenRoundedIcon from '@mui/icons-material/FullscreenRounded';
import Page from '../components/common/Page';
import SectionCard from '../components/common/SectionCard';
import { allLessons, modules } from '../data/course';
import { keyedVisuals, lessonVisuals, moduleVisuals } from '../data/visuals';
import { useAppState } from '../state/AppState';
import type { Lesson } from '../types';

type LessonSection = NonNullable<Lesson['contentSections']>[number];
type VisualSection = LessonSection & {
  visual?: { src: string; alt: string };
};

const shorten = (text: string, max = 54) => {
  const clean = text.trim();
  return clean.length <= max ? clean : `${clean.slice(0, max).trim()}...`;
};

const sectionFrom = (
  title: string,
  keyIdea: string,
  points: string[],
  reflectionQuestion: string,
  pointDetails?: Array<{ label: string; detail: string }>,
  visual?: { src: string; alt: string }
): VisualSection => ({
  title,
  keyIdea,
  points,
  visualType: 'cards',
  reflectionQuestion,
  pointDetails: pointDetails ?? points.map((point) => ({ label: point, detail: point })),
  visual
});

const buildLessonSections = (
  lesson: Lesson,
  visual?: { src: string; alt: string },
  fallbackVisual?: { src: string; alt: string } | null
): VisualSection[] => {
  if (lesson.contentSections?.length) {
    return lesson.contentSections;
  }

  const primaryVisual = visual ?? fallbackVisual ?? undefined;
  const firstPrompt = lesson.prompts[0];
  const sectionVisual = primaryVisual
    ? {
        src: primaryVisual.src,
        alt: primaryVisual.alt
      }
    : undefined;

  return [
    sectionFrom(
      'Situación docente',
      lesson.realCase?.teacherProblem ?? lesson.hookQuestion ?? lesson.summary,
      [
        lesson.hookQuestion ?? 'Identificar una necesidad real del aula.',
        lesson.realCase?.title ?? 'Problema situado de secundaria.',
        lesson.realCase?.teacherProblem ?? lesson.takeaway
      ],
      lesson.reflection[0] ?? '¿Qué necesidad real de mi grupo quiero atender?',
      [
        {
          label: lesson.hookQuestion ?? 'Necesidad real del aula.',
          detail:
            lesson.realCase?.situation ??
            'Antes de usar IA, el docente define qué problema pedagógico quiere resolver y qué fuentes sostienen la decisión.'
        },
        {
          label: lesson.realCase?.title ?? 'Contexto del grupo.',
          detail:
            lesson.realCase?.teacherProblem ??
            'La NEM pide partir del grupo, el territorio, la comunidad y las barreras reales para la participación.'
        },
        {
          label: '¿Para qué importa?',
          detail: lesson.takeaway
        }
      ],
      sectionVisual
    ),
    sectionFrom(
      'Idea pedagógica',
      lesson.takeaway,
      lesson.keyIdeas.slice(0, 3),
      lesson.reflection[1] ?? '¿Qué decisión docente mejora con esta idea?',
      lesson.keyIdeas.slice(0, 3).map((idea) => ({
        label: shorten(idea),
        detail: idea
      }))
    ),
    sectionFrom(
      'Ruta de trabajo',
      lesson.diagram.title,
      lesson.diagram.steps,
      '¿En qué paso necesito más claridad antes de llevarlo al aula?',
      lesson.diagram.steps.map((step, index) => ({
        label: step,
        detail:
          index === 0
            ? 'Este paso aterriza la intención pedagógica en el contexto del grupo.'
            : 'Mantiene conectado el propósito, las fuentes, la actividad y la evidencia de aprendizaje.'
      }))
    ),
    sectionFrom(
      'Consigna profesional',
      firstPrompt?.title ?? 'Convertir intención docente en una consigna clara.',
      lesson.prompts.map((prompt) => prompt.title).slice(0, 3),
      '¿Qué información de mi grupo debe aparecer en la consigna?',
      lesson.prompts.slice(0, 3).map((prompt) => ({
        label: prompt.title,
        detail: prompt.text
      }))
    ),
    sectionFrom(
      'Transferencia al aula',
      lesson.nextLessonBridge ?? lesson.summary,
      lesson.activity.steps.slice(0, 4),
      lesson.reflection[2] ?? '¿Qué producto pequeño puedo construir hoy?',
      lesson.activity.steps.slice(0, 4).map((step) => ({
        label: shorten(step),
        detail: step
      }))
    )
  ];
};

export default function LessonPage() {
  const { lessonId } = useParams();
  const lesson = allLessons.find((item) => item.id === lessonId);
  const {
    completedLessons,
    toggleLessonComplete,
    bookmarkedLessons,
    toggleBookmarkLesson,
    setPresenterMode
  } = useAppState();
  const [activeBubble, setActiveBubble] = useState<Record<number, number>>({});
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);

  if (!lesson) return <Navigate to="/overview" replace />;

  const module = modules.find((item) => item.id === lesson.moduleId);
  const completed = completedLessons.includes(lesson.id);
  const bookmarked = bookmarkedLessons.includes(lesson.id);
  const visual = lessonVisuals[lesson.id];
  const fallbackVisual = module ? moduleVisuals[module.id] : null;
  const lessonIndex = allLessons.findIndex((item) => item.id === lesson.id);
  const nextLesson = allLessons[lessonIndex + 1];
  const sections = buildLessonSections(lesson, visual, fallbackVisual);
  const demoSteps =
    lesson.id === 'nueva-generacion-ia'
      ? ['Buscador', 'Gemini', 'NotebookLM', 'Decisión docente']
      : lesson.id === 'notebook-perfecto'
        ? ['Ciencias 2° — Ecosistemas', '4 fuentes', 'Indexar', 'Una pregunta']
      : lesson.id === 'prompt-engineering'
        ? ['Mismo tema', 'Prompt genérico', 'Plantilla de prompt', 'Comparar']
      : [...lesson.demo.workflow.slice(0, 3).map((step) => shorten(step, 30)), 'Decisión docente'];
  const demoDiagramLabel =
    lesson.id === 'notebook-perfecto'
      ? 'Notebook en 5 minutos'
      : lesson.id === 'prompt-engineering'
        ? 'Dos formas de pedir'
        : 'Diagrama de comparación';
  const conclusionText = lesson.id === 'notebook-perfecto' ? lesson.takeaway : lesson.summary;
  const visualOnlyLesson = ['prompt-engineering', 'notebooklm-studio'].includes(lesson.id);

  return (
    <Page>
      <Stack spacing={3}>
        <Box>
          <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
            <Chip label={module ? `Módulo ${module.number}` : 'Lección'} color="primary" />
            <Chip label={lesson.duration} />
            <Tooltip title={bookmarked ? 'Quitar marcador' : 'Guardar marcador'}>
              <IconButton onClick={() => toggleBookmarkLesson(lesson.id)} aria-label="Marcador">
                {bookmarked ? <BookmarkRoundedIcon color="primary" /> : <BookmarkBorderRoundedIcon />}
              </IconButton>
            </Tooltip>
            <Tooltip title="Presentar lección">
              <IconButton onClick={() => setPresenterMode(true)} aria-label="Presentar">
                <FullscreenRoundedIcon />
              </IconButton>
            </Tooltip>
          </Stack>
          <Typography variant="h2" sx={{ mt: 2, maxWidth: 980 }}>
            {lesson.title}
          </Typography>
        </Box>

        <Grid
            id="pantallas"
            container
            spacing={1.5}
            sx={{
              width: {
                xs: 'calc(100% + 32px)',
                sm: 'calc(100% + 48px)',
                md: 'calc(100% + 80px)',
                lg: 'calc(100% + 96px)'
              },
              ml: { xs: -2, sm: -3, md: -5, lg: -6 }
            }}
          >
            {sections.map((section, sectionIndex) => {
            const sectionVisual = section.imageKey ? keyedVisuals[section.imageKey] : section.visual;
            const hideSectionText = Boolean(section.imageKey);
            const hideSectionQuestion =
              (lesson.id === 'notebook-perfecto' || visualOnlyLesson) && Boolean(section.imageKey);
            const details = section.pointDetails ?? section.points.map((point) => ({ label: point, detail: point }));
            const activeIndex = activeBubble[sectionIndex] ?? 0;
            const activeDetail = details[activeIndex];

            return (
              <Grid item xs={12} key={`${section.title}-${sectionIndex}`}>
                <Box
                  sx={{
                    minHeight: { xs: 'auto', md: sectionVisual ? 430 : 280 },
                    p: { xs: 1.5, sm: 2, md: 2.5 },
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    boxShadow: (theme) =>
                      theme.palette.mode === 'dark'
                        ? '0 24px 80px rgba(0,0,0,0.24)'
                        : '0 24px 80px rgba(15,23,42,0.08)'
                  }}
                >
                  <Stack spacing={3}>
                    <Grid container spacing={3} alignItems="center">
                      <Grid item xs={12}>
                        <Stack spacing={2.2}>
                          <Typography variant="overline" color="primary">
                            {String(sectionIndex + 1).padStart(2, '0')}
                          </Typography>
                          {!hideSectionText ? (
                            <>
                              <Typography variant="h3">{section.title}</Typography>
                              <Typography variant="h5" color="text.secondary" sx={{ lineHeight: 1.35, maxWidth: 920 }}>
                                {section.keyIdea}
                              </Typography>
                            </>
                          ) : null}
                          {!hideSectionQuestion ? (
                            <Alert severity="info" icon={false} sx={{ maxWidth: 860 }}>
                              {section.reflectionQuestion}
                            </Alert>
                          ) : null}
                        </Stack>
                      </Grid>

                      {sectionVisual ? (
                        <Grid item xs={12}>
                          <Box
                            component="button"
                            onClick={() => setZoomedImage(sectionVisual)}
                            sx={{
                              width: '100%',
                              p: 0,
                              border: 0,
                              bgcolor: 'transparent',
                              cursor: 'zoom-in',
                              display: 'block'
                            }}
                            aria-label={`Maximizar imagen: ${sectionVisual.alt}`}
                          >
                            <Box
                              component="img"
                              src={sectionVisual.src}
                              alt={sectionVisual.alt}
                              loading="lazy"
                              sx={{
                                width: '100%',
                                minHeight: { xs: 240, md: 560 },
                                maxHeight: { md: 760 },
                                aspectRatio: '3 / 2',
                                objectFit: 'contain',
                                display: 'block',
                                borderRadius: 2,
                                border: '1px solid',
                                borderColor: 'divider',
                                bgcolor: 'background.default',
                                boxShadow: (theme) =>
                                  theme.palette.mode === 'dark'
                                    ? '0 22px 70px rgba(0,0,0,0.32)'
                                    : '0 22px 70px rgba(15,23,42,0.12)'
                              }}
                            />
                          </Box>
                        </Grid>
                      ) : null}
                    </Grid>

                    <Box>
                      {sectionVisual ? (
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                          {details.map((point, pointIndex) => (
                            <Chip
                              key={`${point.label}-${pointIndex}`}
                              label={point.label}
                              clickable
                              color={pointIndex === activeIndex ? 'primary' : 'default'}
                              variant={pointIndex === activeIndex ? 'filled' : 'outlined'}
                              onClick={() =>
                                setActiveBubble((current) => ({ ...current, [sectionIndex]: pointIndex }))
                              }
                              sx={{
                                height: 'auto',
                                py: 0.75,
                                '& .MuiChip-label': {
                                  whiteSpace: 'normal',
                                  lineHeight: 1.25,
                                  py: 0.4
                                }
                              }}
                            />
                          ))}
                        </Stack>
                      ) : (
                        <Grid container spacing={1.2}>
                          {details.map((point, pointIndex) => (
                            <Grid item xs={12} sm={6} md={section.visualType === 'timeline' ? 2.4 : 4} key={`${point.label}-${pointIndex}`}>
                              <Box
                                component="button"
                                onClick={() =>
                                  setActiveBubble((current) => ({ ...current, [sectionIndex]: pointIndex }))
                                }
                                sx={{
                                  width: '100%',
                                  minHeight: 92,
                                  height: '100%',
                                  p: 1.5,
                                  borderRadius: 2,
                                  border: '1px solid',
                                  borderColor: pointIndex === activeIndex ? 'primary.main' : 'divider',
                                  bgcolor: pointIndex === activeIndex ? 'primary.main' : 'background.default',
                                  color: pointIndex === activeIndex ? 'primary.contrastText' : 'text.primary',
                                  font: 'inherit',
                                  fontWeight: 760,
                                  cursor: 'pointer',
                                  textAlign: 'center',
                                  display: 'grid',
                                  placeItems: 'center',
                                  boxShadow: pointIndex === activeIndex ? '0 14px 34px rgba(14,165,233,0.22)' : 'none'
                                }}
                              >
                                {point.label}
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      )}

                      {activeDetail ? (
                        <Box
                          sx={{
                            mt: 2,
                            p: 2,
                            borderRadius: 2,
                            border: '1px solid',
                            borderColor: 'divider',
                            bgcolor: (theme) =>
                              theme.palette.mode === 'dark'
                                ? 'rgba(2,6,23,0.46)'
                                : 'rgba(240,249,255,0.8)'
                          }}
                        >
                          <Typography variant="subtitle2" color="primary" fontWeight={760}>
                            {activeDetail.label}
                          </Typography>
                          <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                            {activeDetail.detail}
                          </Typography>
                        </Box>
                      ) : null}
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            );
            })}
          </Grid>

        <Dialog open={Boolean(zoomedImage)} onClose={() => setZoomedImage(null)} fullWidth maxWidth="xl">
          <DialogContent sx={{ p: 1, bgcolor: 'background.default' }}>
            {zoomedImage ? (
              <Box
                component="img"
                src={zoomedImage.src}
                alt={zoomedImage.alt}
                sx={{
                  width: '100%',
                  maxHeight: '88vh',
                  objectFit: 'contain',
                  display: 'block',
                  borderRadius: 1
                }}
              />
            ) : null}
          </DialogContent>
        </Dialog>

        {visualOnlyLesson ? (
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="space-between">
            <Button
              variant={completed ? 'contained' : 'outlined'}
              color={completed ? 'success' : 'primary'}
              startIcon={completed ? <CheckCircleRoundedIcon /> : <RadioButtonUncheckedRoundedIcon />}
              onClick={() => toggleLessonComplete(lesson.id)}
            >
              {completed ? 'Lección completada' : 'Marcar completada'}
            </Button>
            {nextLesson ? (
              <Button component={Link} to={`/lesson/${nextLesson.id}`} variant="contained">
                Siguiente lección: {nextLesson.title}
              </Button>
            ) : null}
          </Stack>
        ) : (
          <SectionCard title="Demostración en vivo" eyebrow="Modelaje docente guiado" id="demostración">
          <Stack spacing={3}>
            <Typography variant="h5" sx={{ maxWidth: 980, lineHeight: 1.32 }}>
              {lesson.demo.objective}
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    height: '100%',
                    p: 2.5,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: (theme) =>
                      theme.palette.mode === 'dark' ? 'rgba(2,6,23,0.46)' : 'rgba(240,249,255,0.72)'
                  }}
                >
                  <Typography variant="overline" color="primary">
                    Idea principal
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 1, lineHeight: 1.35 }}>
                    {lesson.takeaway}
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    height: '100%',
                    p: 2.5,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.default'
                  }}
                >
                  <Typography variant="overline" color="text.secondary">
                    {demoDiagramLabel}
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} alignItems="stretch" sx={{ mt: 2 }}>
                    {demoSteps.map((item, index) => (
                      <Box
                        key={`${item}-${index}`}
                        sx={{
                          flex: 1,
                          minHeight: 86,
                          p: 1.5,
                          borderRadius: 2,
                          border: '1px solid',
                          borderColor: index === demoSteps.length - 1 ? 'primary.main' : 'divider',
                          bgcolor: index === demoSteps.length - 1 ? 'primary.main' : 'background.paper',
                          color: index === demoSteps.length - 1 ? 'primary.contrastText' : 'text.primary',
                          display: 'grid',
                          placeItems: 'center',
                          textAlign: 'center',
                          fontWeight: 760
                        }}
                      >
                        {item}
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Grid>
            </Grid>

            {lesson.id === 'notebook-perfecto' ? (
              <Alert severity="info" icon={false}>
                <Typography variant="subtitle2" fontWeight={760}>
                  Fuentes de la demo
                </Typography>
                <Typography variant="body2" sx={{ mt: 0.5 }}>
                  Programa Analítico · Libro CONALITEG · Planeación · Rúbrica
                </Typography>
                <Typography variant="body2" sx={{ mt: 1.5 }}>
                  ¿Notaron que aún no le pedimos que creara nada? Primero le enseñamos a conocer nuestro contexto.
                </Typography>
              </Alert>
            ) : null}

            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Alert severity="info" icon={false}>
                  <Typography variant="subtitle2" fontWeight={760}>
                    Pregunta
                  </Typography>
                  <Typography variant="body2">
                    {lesson.demo.questions[0] ?? lesson.reflection[0] ?? '¿Qué decisión mejora para mi aula?'}
                  </Typography>
                </Alert>
              </Grid>
              <Grid item xs={12} md={4} id="actividad">
                <Alert severity="warning" icon={false}>
                  <Typography variant="subtitle2" fontWeight={760}>
                    Reto
                  </Typography>
                  <Typography variant="body2">{lesson.activity.deliverable}</Typography>
                  <Stack spacing={0.5} sx={{ mt: 1 }}>
                    {lesson.activity.steps.map((step, index) => (
                      <Typography key={`${step}-${index}`} variant="caption" component="div">
                        {index + 1}. {step}
                      </Typography>
                    ))}
                  </Stack>
                </Alert>
              </Grid>
              <Grid item xs={12} md={4}>
                <Alert severity="success" icon={false}>
                  <Typography variant="subtitle2" fontWeight={760}>
                    Conclusión
                  </Typography>
                  <Typography variant="body2">{conclusionText}</Typography>
                </Alert>
              </Grid>
            </Grid>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="space-between">
              <Button
                variant={completed ? 'contained' : 'outlined'}
                color={completed ? 'success' : 'primary'}
                startIcon={completed ? <CheckCircleRoundedIcon /> : <RadioButtonUncheckedRoundedIcon />}
                onClick={() => toggleLessonComplete(lesson.id)}
              >
                {completed ? 'Lección completada' : 'Marcar completada'}
              </Button>
              {nextLesson ? (
                <Button component={Link} to={`/lesson/${nextLesson.id}`} variant="contained">
                  Siguiente lección: {nextLesson.title}
                </Button>
              ) : null}
            </Stack>
          </Stack>
        </SectionCard>
        )}
      </Stack>
    </Page>
  );
}
