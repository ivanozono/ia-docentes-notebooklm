import { Link } from 'react-router-dom';
import { Box, Button, Card, CardContent, Chip, Grid, Stack, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Page from '../components/common/Page';
import { modules } from '../data/course';

export default function WorkshopActivities() {
  return (
    <Page>
      <Stack spacing={4}>
        <Box>
          <Typography variant="overline" color="text.secondary">
            Actividades del taller
          </Typography>
          <Typography variant="h2">Laboratorios de práctica docente durante el taller</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 1, maxWidth: 820 }}>
            Cada actividad produce una evidencia utilizable: consigna para IA, actividad de aula, instrumento de evaluación
            formativa o decisión de implementación.
          </Typography>
        </Box>

        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Box key={module.id}>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                <Box sx={{ color: module.color, display: 'grid' }}>
                  <Icon />
                </Box>
                <Typography variant="h4">
                  Módulo {module.number} — {module.title}
                </Typography>
              </Stack>
              <Grid container spacing={2}>
                {module.lessons.map((lesson) => (
                  <Grid item xs={12} md={6} key={lesson.id}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                      <CardContent sx={{ p: 3 }}>
                        <Stack spacing={1.5}>
                          <Stack direction="row" spacing={1} alignItems="center">
                            <Chip label={lesson.duration} size="small" />
                          </Stack>
                          <Typography variant="h5">{lesson.activity.title}</Typography>
                          <Typography color="text.secondary">{lesson.activity.deliverable}</Typography>
                          <Button
                            component={Link}
                            to={`/lesson/${lesson.id}#actividad`}
                            endIcon={<ArrowForwardRoundedIcon />}
                            sx={{ alignSelf: 'flex-start' }}
                          >
                            Abrir actividad
                          </Button>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          );
        })}
      </Stack>
    </Page>
  );
}
