import { useMemo } from 'react';
import { Box, Checkbox, LinearProgress, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import Page from '../components/common/Page';
import SectionCard from '../components/common/SectionCard';
import { finalProjectChecklist } from '../data/course';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function FinalProject() {
  const [checked, setChecked] = useLocalStorage<string[]>('iadocentes:final-project', []);
  const progress = useMemo(() => Math.round((checked.length / finalProjectChecklist.length) * 100), [checked.length]);

  const toggle = (item: string) => {
    setChecked((current) => (current.includes(item) ? current.filter((value) => value !== item) : [...current, item]));
  };

  return (
    <Page>
      <Stack spacing={3}>
        <Box>
          <Typography variant="overline" color="text.secondary">
            Proyecto integrador
          </Typography>
          <Typography variant="h2">Portafolio docente situado con NotebookLM</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 1, maxWidth: 820 }}>
            Al final del taller, cada participante sale con un sistema mínimo viable para aplicar IA en una secuencia real vinculada con su grupo, escuela y comunidad.
          </Typography>
        </Box>

        <SectionCard title="Seguimiento de avance">
          <Typography variant="h3">{progress}%</Typography>
          <LinearProgress value={progress} variant="determinate" sx={{ my: 2, height: 8, borderRadius: 999 }} />
          <Typography color="text.secondary">{checked.length} de {finalProjectChecklist.length} componentes listos.</Typography>
        </SectionCard>

        <SectionCard title="Lista interactiva de evidencias">
          <List>
            {finalProjectChecklist.map((item) => (
              <ListItem key={item} disableGutters onClick={() => toggle(item)} sx={{ cursor: 'pointer' }}>
                <ListItemIcon>
                  <Checkbox edge="start" checked={checked.includes(item)} tabIndex={-1} disableRipple />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </SectionCard>

        <SectionCard title="Ruta de implementación de 30 días">
          <Stack spacing={2}>
            {[
              ['Días 1-7', 'Crear el primer cuaderno de NotebookLM por asignatura o campo formativo y probar 3 consignas con una fuente real.'],
              ['Días 8-14', 'Diseñar una actividad activa y validarla con un colega.'],
              ['Días 15-21', 'Aplicar una evidencia breve con el grupo y recoger retroalimentación.'],
              ['Días 22-30', 'Ajustar el sistema, documentar aprendizajes y compartir con el colectivo docente.']
            ].map(([range, text]) => (
              <Box key={range} sx={{ p: 2, borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                <Typography variant="subtitle2" fontWeight={760}>{range}</Typography>
                <Typography color="text.secondary">{text}</Typography>
              </Box>
            ))}
          </Stack>
        </SectionCard>
      </Stack>
    </Page>
  );
}
