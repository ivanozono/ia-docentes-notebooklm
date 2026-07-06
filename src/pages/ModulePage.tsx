import { Link, Navigate, useParams } from 'react-router-dom';
import { Box, Button, Card, CardContent, Chip, Grid, Stack, Typography, alpha } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Page from '../components/common/Page';
import ResponsiveImage from '../components/common/ResponsiveImage';
import { modules } from '../data/course';
import { moduleVisuals } from '../data/visuals';

export default function ModulePage() {
  const { moduleId } = useParams();
  const module = modules.find((item) => item.id === moduleId);

  if (!module) return <Navigate to="/overview" replace />;

  const Icon = module.icon;

  return (
    <Page>
      <Stack spacing={4}>
        <Box sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, bgcolor: (theme) => alpha(module.color, theme.palette.mode === 'dark' ? 0.18 : 0.1), border: '1px solid', borderColor: 'divider' }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ color: module.color, display: 'grid' }}>
                  <Icon sx={{ fontSize: 42 }} />
                </Box>
                <Chip label={`Módulo ${module.number}`} />
              </Stack>
              <Typography variant="h2" sx={{ mt: 2 }}>
                {module.title}
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mt: 1, maxWidth: 760 }}>
                {module.subtitle}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <ResponsiveImage
                src={moduleVisuals[module.id].src}
                alt={moduleVisuals[module.id].alt}
                aspectRatio="3 / 2"
              />
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={2}>
          {module.lessons.map((lesson, index) => (
            <Grid item xs={12} md={6} key={lesson.id}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Stack spacing={2}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Chip label={`Lección ${index + 1}`} size="small" />
                      <Typography variant="caption" color="text.secondary">
                        {lesson.duration}
                      </Typography>
                    </Stack>
                    <Typography variant="h5">{lesson.title}</Typography>
                    <Typography color="text.secondary">{lesson.takeaway}</Typography>
                    <Button component={Link} to={`/lesson/${lesson.id}`} endIcon={<ArrowForwardRoundedIcon />} sx={{ alignSelf: 'flex-start' }}>
                      Abrir lección
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Page>
  );
}
