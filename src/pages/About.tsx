import { Avatar, Box, Chip, Grid, Stack, Typography } from '@mui/material';
import Page from '../components/common/Page';
import SectionCard from '../components/common/SectionCard';
import { institutionalLogo } from '../data/visuals';

const platformCreator = {
  name: 'Iván Ozono',
  roles: ['Docente de Secundaria', 'Especialista en IA para Educación', 'Especialista en Lengua de Señas Mexicana (LSM)']
};

const instructors = [
  { name: 'Profe. Iván Ozono', role: 'Facilitador del taller' },
  { name: 'Profe. Marisol Sánchez', role: 'Facilitadora del taller' }
];

const initials = (name: string) =>
  name
    .replace('Profe. ', '')
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

export default function About() {
  return (
    <Page>
      <Stack spacing={3}>
        <Box>
          <Typography variant="overline" color="text.secondary">
            Acerca de
          </Typography>
          <Typography variant="h2">Un acompañante de formación, no una presentación.</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 1, maxWidth: 780 }}>
            Referencia de autoestudio para el taller presencial de 4 horas dirigido a docentes de secundaria pública
            mexicana.
          </Typography>
        </Box>

        <SectionCard title="Platform Creator">
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} alignItems={{ sm: 'center' }}>
            <Avatar sx={{ width: 64, height: 64, bgcolor: 'primary.main', color: 'primary.contrastText', fontWeight: 760, fontSize: 22 }}>
              IO
            </Avatar>
            <Stack spacing={1}>
              <Typography variant="h5">{platformCreator.name}</Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {platformCreator.roles.map((role) => (
                  <Chip key={role} label={role} size="small" />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </SectionCard>

        <SectionCard title="Workshop Instructors">
          <Grid container spacing={2}>
            {instructors.map((person) => (
              <Grid item xs={12} sm={6} key={person.name}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{ p: 2, borderRadius: 2, border: '1px solid', borderColor: 'divider', height: '100%' }}
                >
                  <Avatar sx={{ bgcolor: 'secondary.main' }}>{initials(person.name)}</Avatar>
                  <Box>
                    <Typography fontWeight={700}>{person.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {person.role}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </SectionCard>

        <SectionCard title="Institución">
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} alignItems={{ sm: 'center' }}>
            <Box
              component="img"
              src={institutionalLogo.src}
              alt={institutionalLogo.alt}
              sx={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
            />
            <Box>
              <Typography variant="h6">Escuela Secundaria General No. 25 &quot;Libertad&quot;</Typography>
              <Typography color="text.secondary">
                Taller de 4 horas para docentes de secundaria pública mexicana, alineado con la Nueva Escuela Mexicana.
              </Typography>
            </Box>
          </Stack>
        </SectionCard>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <SectionCard title="Principios de uso responsable" sx={{ height: '100%' }}>
              <Stack spacing={1}>
                {[
                  'El docente conserva la decisión profesional.',
                  'Toda salida debe verificarse contra fuentes y contexto.',
                  'Los datos personales de estudiantes requieren cuidado especial.',
                  'La IA debe ampliar participación, no excluir a quien aprende distinto.'
                ].map((item) => (
                  <Typography key={item} color="text.secondary">
                    • {item}
                  </Typography>
                ))}
              </Stack>
            </SectionCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <SectionCard title="Créditos y versión" sx={{ height: '100%' }}>
              <Stack spacing={1}>
                <Typography color="text.secondary">Versión 1.0.0</Typography>
                <Typography color="text.secondary">
                  Diseño pedagógico alineado con la Nueva Escuela Mexicana: aprendizaje situado, trabajo colaborativo,
                  inclusión, pensamiento crítico y vínculo con la comunidad.
                </Typography>
                <Typography color="text.secondary">
                  Desarrollado para la Escuela Secundaria General No. 25 &quot;Libertad&quot;.
                </Typography>
              </Stack>
            </SectionCard>
          </Grid>
        </Grid>
      </Stack>
    </Page>
  );
}
