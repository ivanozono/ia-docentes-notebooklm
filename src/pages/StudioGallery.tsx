import { Box, Grid, List, ListItem, ListItemText, Stack, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import Page from '../components/common/Page';
import SectionCard from '../components/common/SectionCard';
import PromptCard from '../components/common/PromptCard';
import { studioIcons, studioProducts } from '../data/course';

export default function StudioGallery() {
  const [selected, setSelected] = useState(studioProducts[0].id);
  const product = studioProducts.find((item) => item.id === selected) ?? studioProducts[0];
  const Icon = studioIcons[product.id as keyof typeof studioIcons];

  return (
    <Page>
      <Stack spacing={3}>
        <Box>
          <Typography variant="overline" color="text.secondary">
            Galería Studio
          </Typography>
          <Typography variant="h2">Productos de NotebookLM Studio para el aula</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 1, maxWidth: 840 }}>
            Explora usos didácticos, buenas prácticas, límites y consignas para convertir fuentes en materiales de aprendizaje con sentido comunitario.
          </Typography>
        </Box>

        <Tabs value={selected} onChange={(_, value) => setSelected(value)} variant="scrollable" scrollButtons="auto">
          {studioProducts.map((item) => (
            <Tab key={item.id} value={item.id} label={item.title} />
          ))}
        </Tabs>

        <SectionCard>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ md: 'center' }}>
            <Box sx={{ color: 'primary.main', display: 'grid' }}>
              <Icon sx={{ fontSize: 54 }} />
            </Box>
            <Box>
              <Typography variant="h3">{product.title}</Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                {product.description}
              </Typography>
            </Box>
          </Stack>
        </SectionCard>

        <Grid container spacing={2}>
          {[
            ['Usos didácticos', product.uses],
            ['Ejemplos docentes', product.examples],
            ['Buenas prácticas', product.bestPractices],
            ['Límites y cuidados', product.limitations]
          ].map(([title, items]) => (
            <Grid item xs={12} md={6} key={title as string}>
              <SectionCard title={title as string} sx={{ height: '100%' }}>
                <List dense>
                  {(items as string[]).map((item) => (
                    <ListItem key={item} disableGutters>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </SectionCard>
            </Grid>
          ))}
        </Grid>

        <Box>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Consignas profesionales para IA
          </Typography>
          {product.prompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </Box>
      </Stack>
    </Page>
  );
}
