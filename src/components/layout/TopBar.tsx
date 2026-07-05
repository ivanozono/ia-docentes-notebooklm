import { ReactNode } from 'react';
import { AppBar, Box, Button, IconButton, Stack, Toolbar, Tooltip, Typography, alpha } from '@mui/material';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import FullscreenRoundedIcon from '@mui/icons-material/FullscreenRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useAppState } from '../../state/AppState';

export default function TopBar({ leading }: { leading?: ReactNode }) {
  const { mode, toggleMode, setPresenterMode, setCommandOpen } = useAppState();

  return (
    <AppBar
      elevation={0}
      color="transparent"
      sx={{
        backdropFilter: 'blur(18px)',
        bgcolor: (theme) => alpha(theme.palette.background.default, 0.78),
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Toolbar sx={{ gap: 1, ml: { lg: '304px' }, mr: { xl: '292px' } }}>
        {leading}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="subtitle2" color="text.secondary" noWrap>
            IA para Docentes · Acompañante NotebookLM NEM
          </Typography>
        </Box>
        <Button
          variant="outlined"
          color="inherit"
          startIcon={<SearchRoundedIcon />}
          onClick={() => setCommandOpen(true)}
          sx={{ display: { xs: 'none', sm: 'inline-flex' }, borderColor: 'divider' }}
        >
          Buscar
          <Typography component="span" variant="caption" sx={{ ml: 1, color: 'text.secondary' }}>
            Ctrl K
          </Typography>
        </Button>
        <Stack direction="row" spacing={0.5}>
          <Tooltip title={mode === 'dark' ? 'Modo claro' : 'Modo oscuro'}>
            <IconButton onClick={toggleMode} aria-label="Cambiar tema">
              {mode === 'dark' ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Modo presentación">
            <IconButton onClick={() => setPresenterMode(true)} aria-label="Activar modo presentación">
              <FullscreenRoundedIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
