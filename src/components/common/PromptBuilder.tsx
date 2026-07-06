import { useMemo, useState } from 'react';
import { Autocomplete, Box, Button, Chip, Grid, Stack, TextField, Typography, alpha } from '@mui/material';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import type { Prompt } from '../../types';
import { pedagogicalIntentions } from '../../data/course';

type BuilderFields = {
  tema: string;
  grado: string;
  asignatura: string;
  producto: string;
  intencion: string;
  tiempo: string;
  grupo: string;
};

const emptyFields: BuilderFields = {
  tema: '',
  grado: '',
  asignatura: '',
  producto: '',
  intencion: '',
  tiempo: '',
  grupo: ''
};

const tokenMap: Array<{ key: keyof BuilderFields; token: string; label: string; placeholder: string }> = [
  { key: 'tema', token: '[TEMA]', label: 'Tema', placeholder: 'Ej. Fracciones equivalentes' },
  { key: 'grado', token: '[GRADO]', label: 'Grado', placeholder: 'Ej. 2° de secundaria' },
  { key: 'asignatura', token: '[ASIGNATURA]', label: 'Asignatura', placeholder: 'Ej. Matemáticas' },
  { key: 'producto', token: '[PRODUCTO A GENERAR]', label: 'Producto a generar', placeholder: 'Ej. una rúbrica' },
  { key: 'intencion', token: '[INTENCIÓN PEDAGÓGICA]', label: 'Intención pedagógica', placeholder: 'Ej. Resolver un problema real' },
  { key: 'tiempo', token: '[TIEMPO DISPONIBLE]', label: 'Tiempo disponible', placeholder: 'Ej. 50 minutos' },
  { key: 'grupo', token: '[CARACTERÍSTICAS DEL GRUPO]', label: 'Características del grupo', placeholder: 'Ej. 32 estudiantes, ritmos variados' }
];

export default function PromptBuilder({
  prompts,
  selectedPromptId,
  onSelectPrompt
}: {
  prompts: Prompt[];
  selectedPromptId: string | null;
  onSelectPrompt: (id: string) => void;
}) {
  const [fields, setFields] = useState<BuilderFields>(emptyFields);
  const [copied, setCopied] = useState(false);
  const selected = prompts.find((item) => item.id === selectedPromptId) ?? prompts[0] ?? null;

  const filledText = useMemo(() => {
    if (!selected) return '';
    return tokenMap.reduce((text, field) => {
      const value = fields[field.key].trim();
      return value ? text.split(field.token).join(value) : text;
    }, selected.text);
  }, [selected, fields]);

  const updateField = (key: keyof BuilderFields, value: string) => setFields((current) => ({ ...current, [key]: value }));
  const reset = () => setFields(emptyFields);

  const copy = async () => {
    if (!filledText) return;
    await navigator.clipboard.writeText(filledText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <Box
      sx={{
        p: 2.5,
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'primary.main',
        bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.12 : 0.05)
      }}
    >
      <Stack spacing={2.5}>
        <Stack direction="row" spacing={1} alignItems="center">
          <AutoFixHighRoundedIcon color="primary" />
          <Typography variant="h6">Generador de consignas</Typography>
        </Stack>

        <Autocomplete
          options={prompts}
          value={selected}
          getOptionLabel={(option) => option.title}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          onChange={(_, value) => value && onSelectPrompt(value.id)}
          renderInput={(params) => <TextField {...params} label="Plantilla seleccionada" size="small" />}
          groupBy={(option) => option.category}
        />

        <Grid container spacing={1.5}>
          {tokenMap.map((field) => (
            <Grid item xs={12} sm={6} key={field.key}>
              <TextField
                fullWidth
                size="small"
                label={field.label}
                placeholder={field.placeholder}
                value={fields[field.key]}
                onChange={(event) => updateField(field.key, event.target.value)}
              />
            </Grid>
          ))}
        </Grid>

        <Box>
          <Typography variant="caption" color="text.secondary">
            Intenciones frecuentes
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 0.5 }}>
            {pedagogicalIntentions.slice(0, 8).map((intention) => (
              <Chip
                key={intention}
                label={intention}
                size="small"
                variant={fields.intencion === intention ? 'filled' : 'outlined'}
                color={fields.intencion === intention ? 'primary' : 'default'}
                onClick={() => updateField('intencion', intention)}
              />
            ))}
          </Stack>
        </Box>

        <Box
          component="pre"
          sx={{
            m: 0,
            p: 2,
            whiteSpace: 'pre-wrap',
            borderRadius: 2,
            maxHeight: 220,
            overflow: 'auto',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: 13,
            lineHeight: 1.65,
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? alpha('#020617', 0.62) : alpha('#e0f2fe', 0.42))
          }}
        >
          {filledText || 'Elige una plantilla para ver la consigna aquí.'}
        </Box>

        <Stack direction="row" spacing={1.5} justifyContent="space-between" alignItems="center" flexWrap="wrap" useFlexGap>
          <Stack direction="row" spacing={1}>
            <Button variant="contained" startIcon={<ContentCopyRoundedIcon />} onClick={copy} disabled={!selected}>
              Copiar consigna
            </Button>
            <Button variant="outlined" startIcon={<RestartAltRoundedIcon />} onClick={reset}>
              Reiniciar
            </Button>
          </Stack>
          <Typography variant="caption" color={copied ? 'success.main' : 'text.secondary'}>
            {copied ? 'Copiado' : 'Lista para NotebookLM'}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
