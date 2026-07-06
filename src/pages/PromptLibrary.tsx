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
  Typography,
  alpha
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
    label: '1. Planeación',
    description: 'Documentos para ordenar clases, secuencias y proyectos con tus fuentes.'
  },
  {
    id: 'Actividades de Aprendizaje',
    label: '2. Actividades de aprendizaje',
    description: 'Productos para trabajar en clase: individual, en equipo, retos y estudios de caso.'
  },
  {
    id: 'Evaluación',
    label: '3. Evaluación',
    description: 'Instrumentos, criterios y retroalimentación para revisar avances.'
  },
  {
    id: 'Inclusión',
    label: '4. Inclusión',
    description: 'Ajustes para reducir barreras y ofrecer opciones de participación.'
  },
  {
    id: 'Gestión Escolar',
    label: '5. Gestión escolar',
    description: 'Minutas, oficios, reportes y planes de mejora para la gestión diaria.'
  },
  {
    id: 'Liderazgo',
    label: '6. Liderazgo',
    description: 'Análisis institucional, informes y asesoría para el trabajo colegiado.'
  }
];

const categoryLabel = (category: string) => categoryGuide.find((item) => item.id === category)?.label ?? category;

const notebookLimits = [
  {
    title: 'Trabaja con fuentes',
    detail: 'NotebookLM responde mejor cuando el notebook contiene documentos propios, vigentes y pertinentes.'
  },
  {
    title: 'Tiene límites de uso',
    detail: 'Los límites pueden variar por cuenta o plan. Verifica notebooks, fuentes, consultas y generaciones en la ayuda oficial.'
  },
  {
    title: 'No reemplaza revisión docente',
    detail: 'Antes de usar un producto en clase, revisa fidelidad a fuentes, datos personales, sesgos, lenguaje y pertinencia para el grupo.'
  }
];

const variableGuide = [
  {
    variable: '[INTENCIÓN PEDAGÓGICA]',
    options: ['Comprender', 'Aplicar', 'Analizar', 'Argumentar', 'Crear', 'Evaluar', 'Reflexionar', 'Colaborar', 'Adaptar para inclusión']
  },
  {
    variable: '[PRODUCTO A GENERAR]',
    options: ['Actividad', 'Planeación', 'Rúbrica', 'Lista de cotejo', 'Guía de estudio', 'Infografía', 'Reporte', 'Comunicación', 'Plan de mejora']
  },
  {
    variable: '[CARACTERÍSTICAS DEL GRUPO]',
    options: ['Grado', 'Asignatura', 'ritmo de trabajo', 'lectura compleja', 'participación oral', 'acceso digital', 'barreras de aprendizaje']
  },
  {
    variable: '[TIEMPO DISPONIBLE]',
    options: ['10 minutos', '25 minutos', '50 minutos', '2 sesiones', '1 semana', '1 mes']
  }
];

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
            Plantillas de prompt listas para crear productos docentes con NotebookLM. Elige una categoría, cambia las
            variables y revisa el resultado antes de llevarlo al aula.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {notebookLimits.map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Box
                sx={{
                  height: '100%',
                  p: 2,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: (theme) => alpha(theme.palette.warning.main, theme.palette.mode === 'dark' ? 0.16 : 0.08)
                }}
              >
                <Typography fontWeight={760}>{item.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
                  {item.detail}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Accordion disableGutters variant="outlined" sx={{ '&:before': { display: 'none' } }}>
          <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
            <Box>
              <Typography fontWeight={760}>Guía rápida de variables editables</Typography>
              <Typography variant="body2" color="text.secondary">
                Usa estas listas para completar los campos entre corchetes sin escribir desde cero.
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1.5}>
              {variableGuide.map((item) => (
                <Grid item xs={12} md={6} key={item.variable}>
                  <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'background.default', border: '1px solid', borderColor: 'divider' }}>
                    <Typography variant="subtitle2" color="primary" fontWeight={760}>
                      {item.variable}
                    </Typography>
                    <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap sx={{ mt: 1 }}>
                      {item.options.map((option) => (
                        <Chip key={option} label={option} size="small" variant="outlined" />
                      ))}
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>

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
