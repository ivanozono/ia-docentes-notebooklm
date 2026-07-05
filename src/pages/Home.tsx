import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  LinearProgress,
  Stack,
  Typography,
  alpha
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Page from '../components/common/Page';
import SectionCard from '../components/common/SectionCard';
import { allLessons, modules } from '../data/course';
import { courseVisuals, moduleVisuals } from '../data/visuals';
import { useAppState } from '../state/AppState';

export default function Home() {
  const { completedLessons } = useAppState();
  const progress = Math.round((completedLessons.length / allLessons.length) * 100);

  return (
    <Page>
      <Stack spacing={4}>
        <Box
          sx={{
            minHeight: { xs: 520, md: 620 },
            display: 'grid',
            alignItems: 'center',
            borderRadius: 3,
            p: { xs: 3, md: 6 },
            overflow: 'hidden',
            position: 'relative',
            color: '#f8fafc',
            background:
              'linear-gradient(135deg, rgba(15,23,42,0.96), rgba(3,105,161,0.86)), radial-gradient(circle at 82% 18%, rgba(125,211,252,0.32), transparent 34%)'
          }}
        >
          <Box
            component="img"
            src={courseVisuals.portada.src}
            alt={courseVisuals.portada.alt}
            sx={{
              position: 'absolute',
              right: { xs: -90, md: 36 },
              bottom: { xs: -36, md: 34 },
              width: { xs: 330, md: 520 },
              maxWidth: '58%',
              aspectRatio: '3 / 2',
              objectFit: 'cover',
              borderRadius: 3,
              border: '1px solid rgba(255,255,255,0.22)',
              boxShadow: '0 24px 70px rgba(0,0,0,0.32)',
              opacity: { xs: 0.32, md: 0.88 }
            }}
          />
          <Stack spacing={3} sx={{ maxWidth: 820, position: 'relative', zIndex: 1 }}>
            <Chip label="Taller profesional · 4 horas · Secundaria pública mexicana" sx={{ width: 'fit-content' }} />
            <Typography variant="h1" sx={{ fontSize: { xs: 42, md: 72 } }}>
              IA para Docentes
            </Typography>
            <Typography variant="h4" sx={{ maxWidth: 760, color: 'rgba(248,250,252,0.82)', lineHeight: 1.32 }}>
              De buscar respuestas a crear experiencias de aprendizaje con NotebookLM.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              <Button component={Link} to="/overview" size="large" variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
                Comenzar recorrido
              </Button>
              <Button component={Link} to="/prompts" size="large" variant="outlined" sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.34)' }}>
                Abrir consignas
              </Button>
            </Stack>
          </Stack>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <SectionCard title="Progreso">
              <Typography variant="h3">{progress}%</Typography>
              <LinearProgress variant="determinate" value={progress} sx={{ my: 2, height: 8, borderRadius: 999 }} />
              <Typography color="text.secondary">
                {completedLessons.length} de {allLessons.length} lecciones completadas.
              </Typography>
            </SectionCard>
          </Grid>
          <Grid item xs={12} md={8}>
            <SectionCard title="Objetivos de aprendizaje">
              <Grid container spacing={1.5}>
                {[
                  'Construir un asistente docente basado en fuentes confiables.',
                  'Codiseñar experiencias situadas alineadas con la NEM.',
                  'Integrar NotebookLM al trabajo colegiado y al aula.',
                  'Implementar IA responsable con una ruta de 30 días.'
                ].map((goal) => (
                  <Grid item xs={12} sm={6} key={goal}>
                    <Box sx={{ p: 2, borderRadius: 2, bgcolor: (theme) => alpha(theme.palette.primary.main, 0.07) }}>
                      <Typography fontWeight={680}>{goal}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </SectionCard>
          </Grid>
        </Grid>

        <Box>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Módulos
          </Typography>
          <Grid container spacing={2}>
            {modules.map((module) => {
              const Icon = module.icon;
              const done = module.lessons.filter((lesson) => completedLessons.includes(lesson.id)).length;
              return (
                <Grid item xs={12} md={6} key={module.id}>
                  <Card component={Link} to={`/module/${module.id}`} variant="outlined" sx={{ textDecoration: 'none', color: 'inherit', height: '100%' }}>
                    <Box
                      component="img"
                      src={moduleVisuals[module.id].src}
                      alt={moduleVisuals[module.id].alt}
                      loading="lazy"
                      sx={{
                        width: '100%',
                        aspectRatio: '3 / 1.25',
                        objectFit: 'cover',
                        display: 'block',
                        borderBottom: '1px solid',
                        borderColor: 'divider'
                      }}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Stack spacing={2}>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                          <Box sx={{ color: module.color, display: 'grid' }}>
                            <Icon />
                          </Box>
                          <Typography variant="overline">Módulo {module.number}</Typography>
                        </Stack>
                        <Typography variant="h5">{module.title}</Typography>
                        <Typography color="text.secondary">{module.subtitle}</Typography>
                        <LinearProgress value={(done / module.lessons.length) * 100} variant="determinate" sx={{ height: 6, borderRadius: 999 }} />
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Stack>
    </Page>
  );
}
