import { Link } from 'react-router-dom';
import { Box, Button, Grid, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Page from '../components/common/Page';
import SectionCard from '../components/common/SectionCard';
import ResponsiveImage from '../components/common/ResponsiveImage';
import { modules } from '../data/course';
import { courseVisuals } from '../data/visuals';

export default function CourseOverview() {
  return (
    <Page>
      <Stack spacing={4}>
        <Box>
          <Typography variant="overline" color="text.secondary">
            Ruta del taller
          </Typography>
          <Typography variant="h2">Una ruta de 4 horas para transformar la práctica docente con IA.</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 2, maxWidth: 860, lineHeight: 1.45 }}>
            El taller combina modelaje, práctica guiada, codiseño didáctico y un proyecto integrador que cada docente puede llevar a su aula, escuela y comunidad.
          </Typography>
        </Box>

        <SectionCard title="Trayecto formativo del taller">
          <Stepper alternativeLabel activeStep={-1}>
            {modules.map((module) => (
              <Step key={module.id}>
                <StepLabel>M{module.number}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </SectionCard>

        <SectionCard title="Ciclo de trabajo docente con IA" eyebrow="Mapa visual del taller">
          <ResponsiveImage
            src={courseVisuals.cicloDocente.src}
            alt={courseVisuals.cicloDocente.alt}
            caption="El taller recorre el ciclo completo: diagnosticar, planear, diseñar, implementar, evaluar y ajustar desde la mirada de la NEM."
            aspectRatio="3 / 2"
            objectFit="contain"
          />
        </SectionCard>

        <Grid container spacing={2}>
          {modules.map((module) => (
            <Grid item xs={12} md={6} key={module.id}>
              <SectionCard eyebrow={`Módulo ${module.number}`} title={module.title} sx={{ height: '100%' }}>
                <Stack spacing={2}>
                  <Typography color="text.secondary">{module.subtitle}</Typography>
                  <Stack spacing={1}>
                    {module.lessons.map((lesson) => (
                      <Button key={lesson.id} component={Link} to={`/lesson/${lesson.id}`} endIcon={<ArrowForwardRoundedIcon />} sx={{ justifyContent: 'space-between' }}>
                        {lesson.title}
                      </Button>
                    ))}
                  </Stack>
                </Stack>
              </SectionCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Page>
  );
}
