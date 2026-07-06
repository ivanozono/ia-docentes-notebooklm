import { NavLink } from 'react-router-dom';
import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, alpha } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded';
import FolderSpecialRoundedIcon from '@mui/icons-material/FolderSpecialRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { modules } from '../../data/course';

const mainLinks = [
  { label: 'Inicio', path: '/', icon: HomeRoundedIcon },
  { label: 'Ruta del taller', path: '/overview', icon: LibraryBooksRoundedIcon },
  { label: 'Kit docente', path: '/prompts', icon: CollectionsBookmarkRoundedIcon },
  { label: 'Recursos', path: '/resources', icon: FolderSpecialRoundedIcon },
  { label: 'Actividades del taller', path: '/activities', icon: ChecklistRoundedIcon },
  { label: 'Proyecto integrador', path: '/final-project', icon: FlagRoundedIcon },
  { label: 'Acerca de', path: '/about', icon: InfoRoundedIcon }
];

export default function Sidebar({ onNavigate }: { onNavigate: () => void }) {
  return (
    <Stack sx={{ height: '100%', p: 2, gap: 2 }}>
      <Box sx={{ p: 1 }}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            aria-hidden
            sx={{
              width: 42,
              height: 42,
              borderRadius: 2,
              display: 'grid',
              placeItems: 'center',
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              fontWeight: 800,
              boxShadow: (theme) => `0 16px 34px ${alpha(theme.palette.primary.main, 0.28)}`
            }}
          >
            IA
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="subtitle1" fontWeight={760} noWrap>
              IA para Docentes
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Acompañante NEM
            </Typography>
          </Box>
        </Stack>
      </Box>

      <List dense sx={{ py: 0 }}>
        {mainLinks.map((link) => {
          const Icon = link.icon;
          return (
            <ListItemButton
              key={link.path}
              component={NavLink}
              to={link.path}
              onClick={onNavigate}
              sx={{
                borderRadius: 1,
                mb: 0.25,
                '&.active': {
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.12),
                  color: 'primary.main'
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 36, color: 'inherit' }}>
                <Icon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={link.label} primaryTypographyProps={{ fontSize: 14, fontWeight: 620 }} />
            </ListItemButton>
          );
        })}
      </List>

      <Divider />

      <Box sx={{ overflow: 'auto', pr: 0.5 }}>
        <Typography variant="overline" color="text.secondary" sx={{ px: 1 }}>
          Módulos
        </Typography>
        <List dense sx={{ py: 0 }}>
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <ListItemButton
                key={module.id}
                component={NavLink}
                to={`/module/${module.id}`}
                onClick={onNavigate}
                sx={{
                  alignItems: 'flex-start',
                  borderRadius: 1,
                  mb: 0.5,
                  '&.active': { bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1) }
                }}
              >
                <ListItemIcon sx={{ minWidth: 38, color: module.color, mt: 0.25 }}>
                  <Icon fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary={`M${module.number}. ${module.title}`}
                  secondary={`${module.lessons.length} lecciones`}
                  primaryTypographyProps={{ fontSize: 13.5, fontWeight: 650 }}
                  secondaryTypographyProps={{ fontSize: 12 }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </Stack>
  );
}
