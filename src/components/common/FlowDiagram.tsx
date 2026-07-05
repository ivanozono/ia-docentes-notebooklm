import { Box, Stack, Typography, alpha } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

export default function FlowDiagram({ title, steps }: { title: string; steps: string[] }) {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 3 },
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.06)
      }}
    >
      <Typography variant="subtitle1" fontWeight={720} sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.2} alignItems="stretch">
        {steps.map((step, index) => (
          <Stack key={step} direction="row" spacing={1.2} alignItems="center" sx={{ flex: 1 }}>
            <Box
              sx={{
                minHeight: 88,
                flex: 1,
                p: 1.5,
                borderRadius: 2,
                display: 'grid',
                placeItems: 'center',
                textAlign: 'center',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider'
              }}
            >
              <Typography variant="caption" color="text.secondary">
                Paso {index + 1}
              </Typography>
              <Typography variant="body2" fontWeight={680}>
                {step}
              </Typography>
            </Box>
            {index < steps.length - 1 ? (
              <ArrowForwardRoundedIcon sx={{ display: { xs: 'none', md: 'block' }, color: 'text.secondary' }} />
            ) : null}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
