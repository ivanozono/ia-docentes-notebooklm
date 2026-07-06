import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { CssBaseline, LinearProgress, ThemeProvider } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { makeTheme } from './theme';
import { useAppState } from './state/AppState';
import Shell from './components/layout/Shell';
import CommandPalette from './components/navigation/CommandPalette';
import PresenterMode from './components/presenter/PresenterMode';

const Home = lazy(() => import('./pages/Home'));
const CourseOverview = lazy(() => import('./pages/CourseOverview'));
const ModulePage = lazy(() => import('./pages/ModulePage'));
const LessonPage = lazy(() => import('./pages/LessonPage'));
const PromptLibrary = lazy(() => import('./pages/PromptLibrary'));
const Resources = lazy(() => import('./pages/Resources'));
const WorkshopActivities = lazy(() => import('./pages/WorkshopActivities'));
const FinalProject = lazy(() => import('./pages/FinalProject'));
const About = lazy(() => import('./pages/About'));

export default function App() {
  const { mode, presenterMode, setPresenterMode, setCommandOpen } = useAppState();
  const location = useLocation();
  const theme = makeTheme(mode);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping =
        target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA' || target?.isContentEditable;

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setCommandOpen(true);
      }

      if (!isTyping && event.key.toLowerCase() === 'f') {
        event.preventDefault();
        setPresenterMode(!presenterMode);
      }

      if (event.key === 'Escape' && presenterMode) {
        setPresenterMode(false);
      }

    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [location.pathname, presenterMode, setCommandOpen, setPresenterMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CommandPalette />
      {presenterMode ? (
        <PresenterMode />
      ) : (
        <Shell>
          <AnimatePresence mode="wait">
            <Suspense fallback={<LinearProgress aria-label="Cargando contenido" />}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/overview" element={<CourseOverview />} />
                <Route path="/module/:moduleId" element={<ModulePage />} />
                <Route path="/lesson/:lessonId" element={<LessonPage />} />
                <Route path="/prompts" element={<PromptLibrary />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/activities" element={<WorkshopActivities />} />
                <Route path="/final-project" element={<FinalProject />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </Shell>
      )}
    </ThemeProvider>
  );
}
