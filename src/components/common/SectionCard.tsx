import { ReactNode } from 'react';
import { Card, CardContent, SxProps, Theme, Typography } from '@mui/material';

export default function SectionCard({
  id,
  title,
  eyebrow,
  children,
  sx
}: {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
}) {
  return (
    <Card
      id={id}
      variant="outlined"
      sx={{
        borderColor: 'divider',
        boxShadow: 'none',
        ...sx
      }}
    >
      <CardContent sx={{ p: { xs: 2.5, md: 3 }, '&:last-child': { pb: { xs: 2.5, md: 3 } } }}>
        {eyebrow ? (
          <Typography variant="overline" color="text.secondary">
            {eyebrow}
          </Typography>
        ) : null}
        {title ? (
          <Typography variant="h5" sx={{ mb: 2 }}>
            {title}
          </Typography>
        ) : null}
        {children}
      </CardContent>
    </Card>
  );
}
