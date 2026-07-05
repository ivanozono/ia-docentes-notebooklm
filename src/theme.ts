import { createTheme, alpha } from '@mui/material/styles';

export const makeTheme = (mode: 'light' | 'dark') => {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: isDark ? '#7dd3fc' : '#0369a1',
        contrastText: isDark ? '#082f49' : '#ffffff'
      },
      secondary: {
        main: isDark ? '#c4b5fd' : '#6d28d9'
      },
      success: {
        main: isDark ? '#86efac' : '#15803d'
      },
      warning: {
        main: isDark ? '#fde68a' : '#b45309'
      },
      error: {
        main: isDark ? '#fca5a5' : '#b91c1c'
      },
      background: {
        default: isDark ? '#0b1120' : '#f8fafc',
        paper: isDark ? '#111827' : '#ffffff'
      },
      text: {
        primary: isDark ? '#e5edf7' : '#0f172a',
        secondary: isDark ? '#aebacd' : '#475569'
      },
      divider: isDark ? alpha('#e2e8f0', 0.12) : alpha('#0f172a', 0.1)
    },
    typography: {
      fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      h1: { fontWeight: 720, letterSpacing: 0, lineHeight: 1.04 },
      h2: { fontWeight: 700, letterSpacing: 0, lineHeight: 1.1 },
      h3: { fontWeight: 680, letterSpacing: 0, lineHeight: 1.15 },
      h4: { fontWeight: 650, letterSpacing: 0, lineHeight: 1.18 },
      h5: { fontWeight: 650, letterSpacing: 0 },
      h6: { fontWeight: 650, letterSpacing: 0 },
      button: { textTransform: 'none', fontWeight: 650 }
    },
    shape: {
      borderRadius: 8
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage: isDark
              ? 'linear-gradient(180deg, #0b1120 0%, #111827 100%)'
              : 'linear-gradient(180deg, #f8fafc 0%, #eef6fb 100%)'
          }
        }
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            boxShadow: isDark
              ? '0 18px 45px rgba(0,0,0,0.28)'
              : '0 18px 45px rgba(15,23,42,0.07)'
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none'
          }
        }
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: 12,
            borderRadius: 6
          }
        }
      }
    }
  });
};
