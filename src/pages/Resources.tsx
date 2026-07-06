import { Box, Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import HelpCenterRoundedIcon from '@mui/icons-material/HelpCenterRounded';
import WorkspacesRoundedIcon from '@mui/icons-material/WorkspacesRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import type { SvgIconComponent } from '@mui/icons-material';
import Page from '../components/common/Page';
import { resources } from '../data/course';

const resourceIcons: Record<string, SvgIconComponent> = {
  notebooklm: AutoAwesomeRoundedIcon,
  'notebooklm-ayuda': HelpCenterRoundedIcon,
  workspace: WorkspacesRoundedIcon,
  'workspace-updates': CampaignRoundedIcon,
  'google-for-education': SchoolRoundedIcon,
  gemini: BoltRoundedIcon,
  sep: AccountBalanceRoundedIcon,
  conaliteg: MenuBookRoundedIcon,
  'nem-programas': FlagRoundedIcon,
  edubc: PublicRoundedIcon
};

export default function Resources() {
  const categories = [...new Set(resources.map((item) => item.category))];

  return (
    <Page>
      <Stack spacing={4}>
        <Box>
          <Typography variant="overline" color="text.secondary">
            Recursos
          </Typography>
          <Typography variant="h2">Resources Hub</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 1, maxWidth: 780 }}>
            Solo fuentes oficiales: herramientas de Google y marco curricular vigente para sostener el trabajo después del
            taller.
          </Typography>
        </Box>

        {categories.map((category) => (
          <Box key={category}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              {category}
            </Typography>
            <Grid container spacing={2}>
              {resources
                .filter((item) => item.category === category)
                .map((resource) => {
                  const Icon = resourceIcons[resource.id] ?? PublicRoundedIcon;
                  return (
                    <Grid item xs={12} sm={6} lg={4} key={resource.id}>
                      <Card variant="outlined" sx={{ height: '100%' }}>
                        <CardContent sx={{ p: 3 }}>
                          <Stack spacing={2}>
                            <Box
                              sx={{
                                width: 44,
                                height: 44,
                                borderRadius: 2,
                                display: 'grid',
                                placeItems: 'center',
                                bgcolor: 'primary.main',
                                color: 'primary.contrastText'
                              }}
                            >
                              <Icon />
                            </Box>
                            <Typography variant="h5">{resource.title}</Typography>
                            <Typography color="text.secondary">{resource.description}</Typography>
                            {resource.url ? (
                              <Button
                                href={resource.url}
                                target="_blank"
                                rel="noreferrer"
                                endIcon={<OpenInNewRoundedIcon />}
                                sx={{ alignSelf: 'flex-start' }}
                              >
                                Abrir recurso
                              </Button>
                            ) : null}
                          </Stack>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        ))}
      </Stack>
    </Page>
  );
}
