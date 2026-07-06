import { Link, useLocation } from 'react-router-dom';
import { Box, Button, Divider, List, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import KeyboardCommandKeyRoundedIcon from '@mui/icons-material/KeyboardCommandKeyRounded';
import { allLessons, modules } from '../../data/course';
import { useAppState } from '../../state/AppState';

export default function RightPanel() {
  const location = useLocation();
  const { bookmarkedLessons } = useAppState();
  const currentLesson = location.pathname.startsWith('/lesson/')
    ? allLessons.find((lesson) => `/lesson/${lesson.id}` === location.pathname)
    : null;
  const recent = allLessons.filter((lesson) => bookmarkedLessons.includes(lesson.id)).slice(0, 5);

  return (
    <Stack sx={{ height: '100%', p: 3, gap: 3, overflow: 'auto' }}>
      <Box>
        <Typography variant="overline" color="text.secondary">
          Atajos
        </Typography>
        <Stack spacing={1} sx={{ mt: 1 }}>
          <Button startIcon={<KeyboardCommandKeyRoundedIcon />} variant="outlined" color="inherit">
            Ctrl/Cmd K
          </Button>
          <Typography variant="caption" color="text.secondary">
            Presiona F para presentar. Usa flechas para navegar lecciones.
          </Typography>
        </Stack>
      </Box>

      <Divider />

      {currentLesson ? (
        <Box>
          <Typography variant="overline" color="text.secondary">
            Guía de la lección
          </Typography>
          <List dense>
            {[
              ['Pantallas visuales', '#pantallas'],
              ['Demostración', '#demostración'],
              ['Actividad práctica', '#actividad']
            ].map(([label, href]) => (
              <ListItemButton key={label} component="a" href={href}>
                <ListItemText primary={label} primaryTypographyProps={{ fontSize: 13, fontWeight: 600 }} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      ) : (
        <Box>
          <Typography variant="overline" color="text.secondary">
            Accesos rápidos
          </Typography>
          <List dense>
            {modules.map((module) => (
              <ListItemButton key={module.id} component={Link} to={`/module/${module.id}`}>
                <ListItemText
                  primary={`M${module.number}. ${module.title}`}
                  secondary={`${module.lessons.length} lecciones`}
                  primaryTypographyProps={{ fontSize: 13, fontWeight: 600 }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
      )}

      <Divider />

      <Box>
        <Typography variant="overline" color="text.secondary">
          Marcadores
        </Typography>
        {recent.length ? (
          <List dense>
            {recent.map((lesson) => (
              <ListItemButton key={lesson.id} component={Link} to={`/lesson/${lesson.id}`}>
                <ListItemText primary={lesson.title} primaryTypographyProps={{ fontSize: 13, fontWeight: 600 }} />
              </ListItemButton>
            ))}
          </List>
        ) : (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Guarda lecciones para volver rápido durante el taller.
          </Typography>
        )}
      </Box>
    </Stack>
  );
}
