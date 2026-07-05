import { Box, Button, Card, CardContent, Chip, Grid, Stack, Typography } from '@mui/material';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import Page from '../components/common/Page';
import { resources } from '../data/course';

export default function Resources() {
  const categories = [...new Set(resources.map((item) => item.category))];

  return (
    <Page>
      <Stack spacing={3}>
        <Box>
          <Typography variant="overline" color="text.secondary">
            Recursos
          </Typography>
          <Typography variant="h2">Recursos para enseñar con IA desde la Nueva Escuela Mexicana</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 1, maxWidth: 820 }}>
            Referencias, plantillas y materiales para sostener el trabajo situado después del taller.
          </Typography>
        </Box>

        {categories.map((category) => (
          <Box key={category}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              {category}
            </Typography>
            <Grid container spacing={2}>
              {resources
                .filter((item) => item.category === category)
                .map((resource) => (
                  <Grid item xs={12} md={6} key={resource.id}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                      <CardContent sx={{ p: 3 }}>
                        <Stack spacing={2}>
                          <Chip label={resource.category} sx={{ width: 'fit-content' }} />
                          <Typography variant="h5">{resource.title}</Typography>
                          <Typography color="text.secondary">{resource.description}</Typography>
                          {resource.url ? (
                            <Button href={resource.url} target="_blank" rel="noreferrer" endIcon={<OpenInNewRoundedIcon />} sx={{ alignSelf: 'flex-start' }}>
                              Abrir recurso
                            </Button>
                          ) : null}
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Box>
        ))}
      </Stack>
    </Page>
  );
}
