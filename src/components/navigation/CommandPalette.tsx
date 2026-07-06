import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Chip,
  Dialog,
  DialogContent,
  InputAdornment,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import FullscreenRoundedIcon from '@mui/icons-material/FullscreenRounded';
import { makeSearchIndex } from '../../data/course';
import { useAppState } from '../../state/AppState';
import type { SearchItem } from '../../types';

export default function CommandPalette() {
  const navigate = useNavigate();
  const { commandOpen, setCommandOpen, toggleMode, setPresenterMode } = useAppState();
  const [query, setQuery] = useState('');
  const index = useMemo(() => makeSearchIndex(), []);

  const actions: SearchItem[] = [
    {
      id: 'toggle-dark',
      title: 'Cambiar modo claro/oscuro',
      type: 'Página',
      description: 'Alterna el tema visual',
      path: '#theme'
    },
    {
      id: 'presenter',
      title: 'Activar modo presentación',
      type: 'Página',
      description: 'Vista de una lección a la vez',
      path: '#presenter'
    }
  ];

  const normalized = query.trim().toLowerCase();
  const results = [...actions, ...index]
    .filter((item) =>
      normalized
        ? `${item.title} ${item.description} ${item.type}`.toLowerCase().includes(normalized)
        : true
    )
    .slice(0, 12);

  const selectItem = (item: SearchItem) => {
    if (item.id === 'toggle-dark') {
      toggleMode();
    } else if (item.id === 'presenter') {
      setPresenterMode(true);
    } else {
      navigate(item.path);
    }
    setCommandOpen(false);
    setQuery('');
  };

  return (
    <Dialog
      open={commandOpen}
      onClose={() => setCommandOpen(false)}
      fullWidth
      maxWidth="sm"
      PaperProps={{ sx: { borderRadius: 2, overflow: 'hidden' } }}
    >
      <DialogContent sx={{ p: 0 }}>
        <TextField
          autoFocus
          fullWidth
          placeholder="Buscar lecciones, consignas, recursos o comandos"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon />
              </InputAdornment>
            )
          }}
          sx={{
            '& fieldset': { border: 0 },
            borderBottom: '1px solid',
            borderColor: 'divider'
          }}
        />
        <List sx={{ maxHeight: 520, overflow: 'auto', py: 1 }}>
          {results.map((item) => {
            const ActionIcon = item.id === 'toggle-dark' ? DarkModeRoundedIcon : FullscreenRoundedIcon;
            const showActionIcon = item.id === 'toggle-dark' || item.id === 'presenter';
            return (
              <ListItemButton key={`${item.type}-${item.id}`} onClick={() => selectItem(item)} sx={{ px: 2 }}>
                <ListItemText
                  primary={
                    <Stack direction="row" spacing={1} alignItems="center">
                      {showActionIcon ? <ActionIcon fontSize="small" /> : null}
                      <Typography variant="body2" fontWeight={680}>
                        {item.title}
                      </Typography>
                      <Chip size="small" label={item.type} />
                    </Stack>
                  }
                  secondary={item.description}
                />
              </ListItemButton>
            );
          })}
          {!results.length ? (
            <Box sx={{ p: 3 }}>
              <Typography variant="body2" color="text.secondary">
                No encontré resultados. Prueba con "evaluación", "recursos" o "proyecto comunitario".
              </Typography>
            </Box>
          ) : null}
        </List>
      </DialogContent>
    </Dialog>
  );
}
