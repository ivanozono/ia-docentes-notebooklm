import { Link } from 'react-router-dom';
import { Box, Button, Card, CardContent, Chip, Grid, Stack, Tooltip, Typography, alpha } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Page from '../components/common/Page';
import SectionCard from '../components/common/SectionCard';
import { modules } from '../data/course';
import { courseVisuals, institutionalLogo, moduleVisuals } from '../data/visuals';

const learningGoals = [
  'Construir un asistente docente basado en fuentes confiables.',
  'Codiseñar experiencias situadas alineadas con la NEM.',
  'Integrar NotebookLM al trabajo colegiado y al aula.',
  'Implementar IA responsable con una ruta de 30 días.'
];

const mondayProducts = [
  'Un notebook con fuentes útiles',
  'Una actividad lista para clase',
  'Una planeación adaptable',
  'Un instrumento de evaluación',
  'Un material para estudiantes',
  'Un flujo de trabajo semanal'
];

export default function Home() {
  return (
    <Page>
      <Stack spacing={4}>
        <Box
          sx={{
            borderRadius: 3,
            p: { xs: 3, md: 6 },
            overflow: 'hidden',
            position: 'relative',
            color: '#f8fafc',
            background: 'linear-gradient(135deg, rgba(15,23,42,0.96), rgba(3,105,161,0.86))'
          }}
        >
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={3}>
                <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap" useFlexGap>
                  <Chip label="Taller profesional · 4 horas · Secundaria pública mexicana" sx={{ width: 'fit-content' }} />
                  <Tooltip title={institutionalLogo.alt}>
                    <Box
                      component="img"
                      src={institutionalLogo.src}
                      alt={institutionalLogo.alt}
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid rgba(255,255,255,0.5)'
                      }}
                    />
                  </Tooltip>
                </Stack>
                <Typography variant="h1" sx={{ fontSize: { xs: 42, md: 68 } }}>
                  IA para Docentes
                </Typography>
                <Typography variant="h5" sx={{ maxWidth: 640, color: 'rgba(248,250,252,0.85)', lineHeight: 1.35, fontWeight: 500 }}>
                  De buscar respuestas a crear experiencias de aprendizaje con NotebookLM.
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {['4 módulos', '12 lecciones', 'Productos para el lunes', 'Fuentes docentes'].map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      sx={{
                        color: 'white',
                        borderColor: 'rgba(255,255,255,0.32)',
                        bgcolor: 'rgba(255,255,255,0.1)'
                      }}
                      variant="outlined"
                    />
                  ))}
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                  <Button component={Link} to="/overview" size="large" variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
                    Comenzar recorrido
                  </Button>
                  <Button component={Link} to="/prompts" size="large" variant="outlined" sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.34)' }}>
                    Abrir prompts
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                component="img"
                src={courseVisuals.portada.src}
                alt={courseVisuals.portada.alt}
                sx={{
                  width: '100%',
                  aspectRatio: '3 / 2',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: 3,
                  border: '1px solid rgba(255,255,255,0.22)',
                  boxShadow: '0 24px 70px rgba(0,0,0,0.32)'
                }}
              />
            </Grid>
          </Grid>
        </Box>

        <SectionCard title="Al terminar, cada docente se lleva">
          <Grid container spacing={1.5}>
            {mondayProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product}>
                <Box
                  sx={{
                    minHeight: 76,
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'background.default',
                    border: '1px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Typography fontWeight={720}>{product}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </SectionCard>

        <SectionCard title="Objetivos de aprendizaje">
          <Grid container spacing={1.5}>
            {learningGoals.map((goal) => (
              <Grid item xs={12} sm={6} md={3} key={goal}>
                <Box sx={{ p: 2, height: '100%', borderRadius: 2, bgcolor: (theme) => alpha(theme.palette.primary.main, 0.07) }}>
                  <Typography fontWeight={680} sx={{ fontSize: 14.5, lineHeight: 1.4 }}>
                    {goal}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </SectionCard>

        <Box>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Módulos
          </Typography>
          <Grid container spacing={2}>
            {modules.map((module) => {
              const Icon = module.icon;
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
                        aspectRatio: '3 / 2',
                        objectFit: 'cover',
                        display: 'block',
                        borderBottom: '1px solid',
                        borderColor: 'divider'
                      }}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Stack spacing={1.5}>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                          <Box sx={{ color: module.color, display: 'grid' }}>
                            <Icon />
                          </Box>
                          <Typography variant="overline">Módulo {module.number}</Typography>
                        </Stack>
                        <Typography variant="h5">{module.title}</Typography>
                        <Typography color="text.secondary">{module.subtitle}</Typography>
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
