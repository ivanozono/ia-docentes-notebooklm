import { useMemo, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Grid,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Page from '../components/common/Page';
import PromptCard from '../components/common/PromptCard';
import PromptBuilder from '../components/common/PromptBuilder';
import { allPrompts, productExamplesByCategory } from '../data/course';
import type { Difficulty } from '../types';

const categoryGuide = [
  {
    id: 'Planeación',
    label: '📚 Planeación',
    description: 'Documentos para ordenar clases, secuencias y proyectos con tus fuentes.'
  },
  {
    id: 'Actividades de Aprendizaje',
    label: '🎯 Actividades de Aprendizaje',
    description: 'Productos para trabajar en clase: individual, en equipo, retos y estudios de caso.'
  },
  {
    id: 'Evaluación',
    label: '📊 Evaluación',
    description: 'Instrumentos, criterios y retroalimentación para revisar avances.'
  },
  {
    id: 'Inclusión',
    label: '👥 Inclusión',
    description: 'Ajustes para reducir barreras y ofrecer opciones de participación.'
  },
  {
    id: 'Gestión Escolar',
    label: '🏫 Gestión Escolar',
    description: 'Minutas, oficios, reportes y planes de mejora para la gestión diaria.'
  },
  {
    id: 'Liderazgo',
    label: '👨‍💼 Liderazgo',
    description: 'Análisis institucional, informes y asesoría para el trabajo colegiado.'
  }
];

const categoryLabel = (category: string) => categoryGuide.find((item) => item.id === category)?.label ?? category;

export default function PromptLibrary() {
  const [query, setQuery] = useState('');
  const [difficulty, setDifficulty] = useState<Difficulty | 'Todos'>('Todos');
  const [category, setCategory] = useState('Todos');
  const [selectedPromptId, setSelectedPromptId] = useState<string | null>(allPrompts[0]?.id ?? null);

  const categories = categoryGuide.filter((item) => allPrompts.some((prompt) => prompt.category === item.id));

  const filtered = useMemo(
    () =>
      allPrompts.filter((prompt) => {
        const matchesText = `${prompt.title} ${prompt.category} ${prompt.text}`.toLowerCase().includes(query.toLowerCase());
        const matchesDifficulty = difficulty === 'Todos' || prompt.difficulty === difficulty;
        const matchesCategory = category === 'Todos' || prompt.category === category;
        return matchesText && matchesDifficulty && matchesCategory;
      }),
    [category, difficulty, query]
  );

  const groupedPrompts = categories
    .map((item) => ({
      ...item,
      prompts: filtered.filter((prompt) => prompt.category === item.id)
    }))
    .filter((item) => item.prompts.length > 0);

  return (
    <Page>
      <Stack spacing={3}>
        <Box>
          <Typography variant="overline" color="text.secondary">
            Kit profesional docente
          </Typography>
          <Typography variant="h2">Kit profesional docente</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 1, maxWidth: 780 }}>
            Plantillas listas para crear planeaciones, actividades, evaluaciones, inclusión, gestión escolar y liderazgo con
            NotebookLM.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4} sx={{ order: { xs: 1, md: 2 } }}>
            <Box sx={{ position: { md: 'sticky' }, top: { md: 88 } }}>
              <PromptBuilder prompts={allPrompts} selectedPromptId={selectedPromptId} onSelectPrompt={setSelectedPromptId} />
            </Box>
          </Grid>

          <Grid item xs={12} md={8} sx={{ order: { xs: 2, md: 1 } }}>
            <Stack spacing={3}>
              <Stack spacing={2}>
                <TextField label="Buscar plantilla" value={query} onChange={(event) => setQuery(event.target.value)} />
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip label={`Todas (${allPrompts.length})`} color={category === 'Todos' ? 'primary' : 'default'} onClick={() => setCategory('Todos')} />
                  {categories.map((item) => (
                    <Chip
                      key={item.id}
                      label={`${item.label} (${allPrompts.filter((prompt) => prompt.category === item.id).length})`}
                      color={category === item.id ? 'primary' : 'default'}
                      onClick={() => setCategory(item.id)}
                    />
                  ))}
                </Stack>
                <ToggleButtonGroup value={difficulty} exclusive onChange={(_, value) => value && setDifficulty(value)} size="small">
                  {['Todos', 'Básico', 'Intermedio', 'Avanzado'].map((item) => (
                    <ToggleButton key={item} value={item}>
                      {item}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Stack>

              <Stack spacing={3}>
                <Typography variant="body2" color="text.secondary">
                  {filtered.length} plantilla{filtered.length === 1 ? '' : 's'} disponible{filtered.length === 1 ? '' : 's'}
                  {category !== 'Todos' ? ` en ${categoryLabel(category)}` : ''}.
                </Typography>

                {groupedPrompts.map((group) => (
                  <Box key={group.id}>
                    <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap sx={{ mb: 0.5 }}>
                      <Typography variant="h5">{group.label}</Typography>
                      <Chip size="small" label={`${group.prompts.length} plantillas`} color="primary" variant="outlined" />
                    </Stack>
                    <Typography color="text.secondary" sx={{ mb: 1.5 }}>
                      {group.description}
                    </Typography>
                    {productExamplesByCategory[group.id]?.length ? (
                      <Accordion disableGutters variant="outlined" sx={{ mb: 2, '&:before': { display: 'none' } }}>
                        <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                          <Typography variant="body2" fontWeight={680}>
                            Ejemplos de productos que puedes generar ({productExamplesByCategory[group.id].length})
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            {productExamplesByCategory[group.id].map((example) => (
                              <Chip key={example} label={example} size="small" variant="outlined" />
                            ))}
                          </Stack>
                        </AccordionDetails>
                      </Accordion>
                    ) : null}
                    <Grid container spacing={2}>
                      {group.prompts.map((prompt) => (
                        <Grid item xs={12} sm={6} key={prompt.id}>
                          <PromptCard prompt={prompt} onUse={setSelectedPromptId} />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Page>
  );
}
