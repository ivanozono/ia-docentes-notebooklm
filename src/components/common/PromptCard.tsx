import { useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Collapse,
  IconButton,
  LinearProgress,
  Stack,
  Tooltip,
  Typography,
  alpha
} from '@mui/material';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import type { Prompt } from '../../types';
import { useAppState } from '../../state/AppState';

export default function PromptCard({ prompt }: { prompt: Prompt }) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const { favoritePrompts, toggleFavoritePrompt } = useAppState();
  const favorite = favoritePrompts.includes(prompt.id);

  const copy = async () => {
    await navigator.clipboard.writeText(prompt.text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: (theme) => alpha(theme.palette.background.paper, 0.76)
      }}
    >
      <Stack spacing={1.5}>
        <Stack direction="row" spacing={1} alignItems="flex-start">
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="subtitle1" fontWeight={720}>
              {prompt.title}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 1 }}>
              <Chip size="small" label={prompt.category} color="primary" variant="outlined" />
              <Chip size="small" label={prompt.difficulty} />
              <Chip size="small" label={`${prompt.usefulness}% utilidad`} color="success" variant="outlined" />
            </Stack>
          </Box>
          <Tooltip title={favorite ? 'Quitar favorito' : 'Marcar favorito'}>
            <IconButton onClick={() => toggleFavoritePrompt(prompt.id)} aria-label="Favorito">
              {favorite ? <FavoriteRoundedIcon color="error" /> : <FavoriteBorderRoundedIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Copiar consigna">
            <IconButton onClick={copy} aria-label="Copiar consigna">
              <ContentCopyRoundedIcon />
            </IconButton>
          </Tooltip>
        </Stack>

        <LinearProgress
          variant="determinate"
          value={prompt.usefulness}
          color="success"
          sx={{ height: 6, borderRadius: 999 }}
        />

        <Collapse in={expanded} collapsedSize={78}>
          <Box
            component="pre"
            sx={{
              m: 0,
              p: 2,
              whiteSpace: 'pre-wrap',
              borderRadius: 1,
              overflow: 'auto',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              fontSize: 13,
              lineHeight: 1.65,
              bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? alpha('#020617', 0.62) : alpha('#e0f2fe', 0.42)
            }}
          >
            {prompt.text}
          </Box>
        </Collapse>

        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Button size="small" endIcon={<ExpandMoreRoundedIcon />} onClick={() => setExpanded((value) => !value)}>
            {expanded ? 'Contraer' : 'Expandir'}
          </Button>
          <Typography variant="caption" color={copied ? 'success.main' : 'text.secondary'}>
            {copied ? 'Copiado' : 'Lista para NotebookLM'}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
