import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Chip,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  LinearProgress,
  Stack,
  Tooltip,
  Typography,
  alpha
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { allLessons, modules } from '../../data/course';
import { useAppState } from '../../state/AppState';
import { getWorkshopMoments } from '../../data/lessonExperience';

const visualOnlyLessons = ['prompt-engineering', 'notebooklm-studio'];

export default function PresenterMode() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setPresenterMode } = useAppState();
  const moments = useMemo(() => getWorkshopMoments(), []);

  const [momentIndex, setMomentIndex] = useState(() => {
    const currentLessonId = location.pathname.startsWith('/lesson/')
      ? location.pathname.replace('/lesson/', '')
      : null;
    if (!currentLessonId) return 0;
    const startIndex = moments.findIndex((item) => item.lessonId === currentLessonId);
    return startIndex >= 0 ? startIndex : 0;
  });
  const [activeBubble, setActiveBubble] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);

  const moment = moments[momentIndex];
  const module = modules.find((item) => item.id === moment.moduleId);
  const lesson = moment.lessonId ? allLessons.find((item) => item.id === moment.lessonId) : undefined;
  const visualOnlyLesson = Boolean(lesson && visualOnlyLessons.includes(lesson.id));
  const lessonPosition = module && lesson ? module.lessons.findIndex((item) => item.id === lesson.id) : -1;

  useEffect(() => {
    setActiveBubble(0);
  }, [momentIndex]);

  useEffect(() => {
    const path = moment.lessonId ? `/lesson/${moment.lessonId}` : `/module/${moment.moduleId}`;
    if (location.pathname !== path) {
      navigate(path, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moment]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!['ArrowRight', 'ArrowLeft'].includes(event.key)) return;
      event.preventDefault();

      if (event.key === 'ArrowRight') {
        setMomentIndex((current) => Math.min(current + 1, moments.length - 1));
      }

      if (event.key === 'ArrowLeft') {
        setMomentIndex((current) => Math.max(current - 1, 0));
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [moments.length]);

  const goPrevious = () => setMomentIndex((current) => Math.max(current - 1, 0));
  const goNext = () => setMomentIndex((current) => Math.min(current + 1, moments.length - 1));

  const imageVisual = moment.visual.type === 'image' ? moment.visual : null;
  const diagramVisual = moment.visual.type === 'diagram' ? moment.visual : null;
  const details =
    moment.pointDetails ?? (diagramVisual ? diagramVisual.steps.map((step) => ({ label: step, detail: step })) : []);
  const activeDetail = details[activeBubble];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 3, md: 6 }
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={{ xs: 3, md: 5 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
              <Chip label={`Taller · ${module?.title ?? 'NotebookLM'}`} color="primary" />
              <Chip label={`${momentIndex + 1}/${moments.length}`} variant="outlined" />
            </Stack>
            <IconButton onClick={() => setPresenterMode(false)} aria-label="Salir de presentación">
              <CloseRoundedIcon />
            </IconButton>
          </Stack>
          <LinearProgress variant="determinate" value={((momentIndex + 1) / moments.length) * 100} sx={{ height: 6, borderRadius: 999 }} />

          <Stack
            direction={{ xs: 'column', md: imageVisual ? 'column' : 'row' }}
            spacing={{ xs: 3, md: 4 }}
            alignItems="center"
          >
            <Box sx={{ flex: imageVisual ? '0 0 auto' : 1, minWidth: 0, width: '100%' }}>
              {!visualOnlyLesson ? (
                <Typography variant="overline" color="text.secondary">
                  {lesson && module && lessonPosition >= 0
                    ? `Módulo ${module.number} · Lección ${lessonPosition + 1} de ${module.lessons.length} · ${moment.subtitle}`
                    : moment.subtitle}
                </Typography>
              ) : null}
              {!imageVisual ? (
                <>
                  <Typography variant="h1" sx={{ fontSize: { xs: 42, md: 72 }, maxWidth: 1100 }}>
                    {moment.title}
                  </Typography>
                  <Typography variant="h4" color="text.secondary" sx={{ mt: 2, maxWidth: 980, lineHeight: 1.28 }}>
                    {moment.visibleSentence}
                  </Typography>
                  {moment.quote ? (
                    <Typography variant="h6" sx={{ mt: 3, color: 'primary.main' }}>
                      “{moment.quote}”
                    </Typography>
                  ) : null}
                </>
              ) : null}
            </Box>

            <Box sx={{ flex: 1, width: '100%' }}>
              {imageVisual ? (
                <Box
                  component="button"
                  onClick={() => setZoomedImage({ src: imageVisual.src, alt: imageVisual.alt })}
                  sx={{
                    width: '100%',
                    p: 0,
                    border: 0,
                    bgcolor: 'transparent',
                    cursor: 'zoom-in',
                    display: 'block'
                  }}
                  aria-label={`Maximizar imagen: ${imageVisual.alt}`}
                >
                  <Box
                    component="img"
                    src={imageVisual.src}
                    alt={imageVisual.alt}
                    sx={{
                      width: '100%',
                      maxHeight: { xs: 380, md: '62vh' },
                      objectFit: 'contain',
                      display: 'block',
                      borderRadius: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                      bgcolor: 'background.paper',
                      boxShadow: (theme) => `0 24px 70px ${alpha(theme.palette.common.black, 0.22)}`
                    }}
                  />
                </Box>
              ) : diagramVisual ? (
                <Box
                  sx={{
                    p: { xs: 2, md: 3 },
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper'
                  }}
                >
                  <Typography variant="overline" color="text.secondary">
                    {diagramVisual.title}
                  </Typography>
                  <Stack spacing={1.5} sx={{ mt: 2 }}>
                    {diagramVisual.steps.slice(0, 5).map((step, stepIndex) => (
                      <Stack key={step} direction="row" spacing={1.5} alignItems="center">
                        <Box
                          sx={{
                            width: 34,
                            height: 34,
                            borderRadius: '50%',
                            display: 'grid',
                            placeItems: 'center',
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                            fontWeight: 760
                          }}
                        >
                          {stepIndex + 1}
                        </Box>
                        <Typography variant="h6">{step}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              ) : null}

              {details.length ? (
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2.5 }}>
                  {details.map((point, pointIndex) => (
                    <Chip
                      key={`${point.label}-${pointIndex}`}
                      label={point.label}
                      clickable
                      color={pointIndex === activeBubble ? 'primary' : 'default'}
                      variant={pointIndex === activeBubble ? 'filled' : 'outlined'}
                      onClick={() => setActiveBubble(pointIndex)}
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
              ) : null}

              {activeDetail ? (
                <Box
                  sx={{
                    mt: 2,
                    p: 2,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'rgba(2,6,23,0.46)' : 'rgba(240,249,255,0.8)')
                  }}
                >
                  <Typography variant="subtitle1" color="primary" fontWeight={760}>
                    {activeDetail.label}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                    {activeDetail.detail}
                  </Typography>
                </Box>
              ) : null}
            </Box>
          </Stack>

          {!visualOnlyLesson ? (
            <Box
              sx={{
                p: 2,
                borderRadius: 3,
                bgcolor: (theme) => alpha(theme.palette.background.paper, 0.76),
                border: '1px solid',
                borderColor: 'divider'
              }}
            >
              <Typography variant="overline" color="text.secondary">
                Pregunta para el grupo
              </Typography>
              <Typography variant="h6">{moment.reflectionQuestion}</Typography>
            </Box>
          ) : null}

          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Button
              onClick={goPrevious}
              disabled={momentIndex === 0}
              startIcon={<ArrowBackRoundedIcon />}
            >
              Anterior
            </Button>
            <Tooltip title="Flechas para avanzar · F o Esc para salir">
              <Typography variant="body2" color="text.secondary">
                Flechas para avanzar · F o Esc para salir
              </Typography>
            </Tooltip>
            <Button
              onClick={goNext}
              disabled={momentIndex === moments.length - 1}
              endIcon={<ArrowForwardRoundedIcon />}
            >
              Siguiente
            </Button>
          </Stack>

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
        </Stack>
      </Container>
    </Box>
  );
}
