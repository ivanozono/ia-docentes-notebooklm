import { ReactNode, useState } from 'react';
import { Box, Drawer, IconButton, Stack, Toolbar, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const sidebarWidth = 304;

export default function Shell({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex' }}>
      <Drawer
        variant={isDesktop ? 'permanent' : 'temporary'}
        open={isDesktop || mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: sidebarWidth,
            borderRight: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper'
          }
        }}
      >
        <Sidebar onNavigate={() => setMobileOpen(false)} />
      </Drawer>

      <Box
        component="main"
        sx={{
          flex: 1,
          minWidth: 0,
          ml: { lg: `${sidebarWidth}px` }
        }}
      >
        <TopBar
          leading={
            <Tooltip title="Abrir navegación">
              <IconButton onClick={() => setMobileOpen(true)} sx={{ display: { lg: 'none' } }}>
                <MenuRoundedIcon />
              </IconButton>
            </Tooltip>
          }
        />
        <Toolbar />
        <Stack
          sx={{
            width: '100%',
            maxWidth: 1440,
            mx: 'auto',
            px: { xs: 2, sm: 3, md: 5 },
            py: { xs: 2, md: 4 }
          }}
        >
          {children}
        </Stack>
      </Box>
    </Box>
  );
}
