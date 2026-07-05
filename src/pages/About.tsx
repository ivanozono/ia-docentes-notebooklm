import { Box, Grid, Stack, Typography } from '@mui/material';
import Page from '../components/common/Page';
import SectionCard from '../components/common/SectionCard';

export default function About() {
  return (
    <Page>
      <Stack spacing={3}>
        <Box>
          <Typography variant="overline" color="text.secondary">
            Acerca de
          </Typography>
          <Typography variant="h2">Un acompañante de formación, no una presentación.</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 1, maxWidth: 840 }}>
            Esta aplicación acompaña un taller presencial de 4 horas y queda como referencia de autoestudio para docentes de secundaria pública mexicana.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <SectionCard title="Diseño pedagógico">
              <Typography color="text.secondary">
                El enfoque parte de la Nueva Escuela Mexicana: aprendizaje situado, trabajo colaborativo, inclusión, pensamiento crítico y vínculo con la comunidad.
              </Typography>
            </SectionCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <SectionCard title="Marca escolar">
              <Typography color="text.secondary">
                No se encontró un logo en el workspace. La interfaz usa una marca tipográfica sobria y deja espacios adecuados para integrar el logo en hero, pie de página o certificado.
              </Typography>
            </SectionCard>
          </Grid>
        </Grid>

        <SectionCard title="Principios de uso responsable">
          <Stack spacing={1}>
            {[
              'El docente conserva la decisión profesional.',
              'Toda salida debe verificarse contra fuentes y contexto.',
              'Los datos personales de estudiantes requieren cuidado especial.',
              'La IA debe ampliar participación, no excluir a quien aprende distinto.'
            ].map((item) => (
              <Typography key={item} color="text.secondary">• {item}</Typography>
            ))}
          </Stack>
        </SectionCard>
      </Stack>
    </Page>
  );
}
