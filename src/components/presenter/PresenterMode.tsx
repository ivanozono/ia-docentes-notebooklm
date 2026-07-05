import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  Typography,
  alpha
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import { allLessons, modules } from '../../data/course';
import { useAppState } from '../../state/AppState';
import { getPresentationMoments } from '../../data/lessonExperience';

export default function PresenterMode() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setPresenterMode } = useAppState();
  const lessonId = location.pathname.startsWith('/lesson/') ? location.pathname.replace('/lesson/', '') : allLessons[0].id;
  const lesson = allLessons.find((item) => item.id === lessonId) ?? allLessons[0];
  const module = modules.find((item) => item.id === lesson.moduleId);
  const index = allLessons.findIndex((item) => item.id === lesson.id);
  const previous = allLessons[index - 1];
  const next = allLessons[index + 1];
  const moments = useMemo(() => getPresentationMoments(lesson), [lesson]);
  const [momentIndex, setMomentIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);
  const moment = moments[momentIndex];
  const visualOnlyLesson = ['prompt-engineering', 'notebooklm-studio'].includes(lesson.id);

  useEffect(() => {
    setMomentIndex(0);
  }, [lesson.id]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!['ArrowRight', 'ArrowLeft'].includes(event.key)) return;
      event.preventDefault();

      if (event.key === 'ArrowRight') {
        if (momentIndex < moments.length - 1) {
          setMomentIndex((current) => current + 1);
        } else if (next) {
          navigate(`/lesson/${next.id}`);
        }
      }

      if (event.key === 'ArrowLeft') {
        if (momentIndex > 0) {
          setMomentIndex((current) => current - 1);
        } else if (previous) {
          navigate(`/lesson/${previous.id}`);
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [momentIndex, moments.length, navigate, next, previous]);

  const goPrevious = () => {
    if (momentIndex > 0) {
      setMomentIndex((current) => current - 1);
    }
  };

  const goNext = () => {
    if (momentIndex < moments.length - 1) {
      setMomentIndex((current) => current + 1);
    }
  };

  const imageVisual = moment.visual.type === 'image' ? moment.visual : null;
  const diagramVisual = moment.visual.type === 'diagram' ? moment.visual : null;

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
            <Stack direction="row" spacing={1} alignItems="center">
              <Chip label={`Presentación · ${module?.title ?? 'Taller'}`} color="primary" />
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
                  Lección {index + 1} de {allLessons.length} · {moment.subtitle}
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
                      maxHeight: { xs: 380, md: '68vh' },
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
            </Box>
          </Stack>

          {!visualOnlyLesson ? (
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={2}
              alignItems={{ md: 'center' }}
              sx={{
                p: 2,
                borderRadius: 3,
                bgcolor: (theme) => alpha(theme.palette.background.paper, 0.76),
                border: '1px solid',
                borderColor: 'divider'
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography variant="overline" color="text.secondary">
                  Pregunta para el grupo
                </Typography>
                <Typography variant="h6">{moment.reflectionQuestion}</Typography>
              </Box>
              <Stack direction="row" spacing={1}>
                <Button variant="contained" startIcon={<PlayCircleRoundedIcon />}>
                  Live Demo
                </Button>
                <Button variant="outlined" startIcon={<EditNoteRoundedIcon />}>
                  Actividad
                </Button>
              </Stack>
            </Stack>
          ) : null}

          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Button
              component={Link}
              to={previous ? `/lesson/${previous.id}` : `/lesson/${lesson.id}`}
              disabled={!previous && momentIndex === 0}
              startIcon={<ArrowBackRoundedIcon />}
              onClick={(event) => {
                if (momentIndex > 0) {
                  event.preventDefault();
                  goPrevious();
                }
              }}
            >
              Anterior
            </Button>
            <Typography variant="body2" color="text.secondary">
              Flechas para avanzar · F o Esc para salir
            </Typography>
            <Button
              component={Link}
              to={next ? `/lesson/${next.id}` : `/lesson/${lesson.id}`}
              disabled={!next && momentIndex === moments.length - 1}
              endIcon={<ArrowForwardRoundedIcon />}
              onClick={(event) => {
                if (momentIndex < moments.length - 1) {
                  event.preventDefault();
                  goNext();
                }
              }}
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
