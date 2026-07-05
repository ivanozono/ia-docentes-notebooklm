import { ReactNode } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function Page({ children }: { children: ReactNode }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      sx={{ width: '100%' }}
    >
      {children}
    </Box>
  );
}
