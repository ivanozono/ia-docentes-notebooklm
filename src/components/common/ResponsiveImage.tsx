import { Box, Typography } from '@mui/material';

export default function ResponsiveImage({
  src,
  alt,
  caption,
  aspectRatio = '3 / 2',
  objectFit = 'cover'
}: {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain';
}) {
  return (
    <Box>
      <Box
        component="img"
        src={src}
        alt={alt}
        loading="lazy"
        sx={{
          width: '100%',
          aspectRatio,
          display: 'block',
          objectFit,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper'
        }}
      />
      {caption ? (
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
          {caption}
        </Typography>
      ) : null}
    </Box>
  );
}
