import { Link } from 'react-router-dom';
import { Box, Button, Card, CardContent, Chip, Grid, Stack, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Page from '../components/common/Page';
import { allLessons, modules } from '../data/course';

export default function WorkshopActivities() {
  return (
    <Page>
      <Stack spacing={3}>
        <Box>
          <Typography variant="overline" color="text.secondary">
            Actividades del taller
          </Typography>
          <Typography variant="h2">Laboratorios de práctica docente durante el taller</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 1, maxWidth: 820 }}>
            Cada actividad produce una evidencia utilizable: consigna para IA, actividad de aula, instrumento de evaluación formativa o decisión de implementación.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {allLessons.map((lesson) => {
            const module = modules.find((item) => item.id === lesson.moduleId);
            return (
              <Grid item xs={12} md={6} key={lesson.id}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Stack spacing={1.5}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Chip label={module ? `M${module.number}` : 'Taller'} size="small" />
                        <Typography variant="caption" color="text.secondary">
                          {lesson.duration}
                        </Typography>
                      </Stack>
                      <Typography variant="h5">{lesson.activity.title}</Typography>
                      <Typography color="text.secondary">{lesson.activity.deliverable}</Typography>
                      <Button component={Link} to={`/lesson/${lesson.id}#actividad`} endIcon={<ArrowForwardRoundedIcon />} sx={{ alignSelf: 'flex-start' }}>
                        Abrir actividad
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Page>
  );
}
