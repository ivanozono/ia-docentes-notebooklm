import { Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import type { Demo } from '../../types';
import SectionCard from './SectionCard';

const listConfig = [
  ['Flujo de trabajo en NotebookLM', 'workflow', PlayCircleRoundedIcon],
  ['Preguntas sugeridas', 'questions', HelpRoundedIcon],
  ['Resultados esperados', 'expectedResults', CheckCircleRoundedIcon],
  ['Sugerencias para quien facilita', 'presenterTips', TipsAndUpdatesRoundedIcon]
] as const;

export default function DemoPanel({ demo }: { demo: Demo }) {
  return (
    <SectionCard title="Demostración en vivo" eyebrow="Modelaje docente guiado">
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        {demo.objective}
      </Typography>
      <Grid container spacing={2}>
        {listConfig.map(([title, key, Icon]) => (
          <Grid item xs={12} md={6} key={key}>
            <Typography variant="subtitle2" fontWeight={720}>
              {title}
            </Typography>
            <List dense>
              {demo[key].map((item) => (
                <ListItem key={item} disableGutters>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <Icon fontSize="small" color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} primaryTypographyProps={{ fontSize: 14 }} />
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
    </SectionCard>
  );
}
