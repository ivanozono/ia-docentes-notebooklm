import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

type AppState = {
  mode: 'light' | 'dark';
  toggleMode: () => void;
  presenterMode: boolean;
  setPresenterMode: (value: boolean) => void;
  commandOpen: boolean;
  setCommandOpen: (value: boolean) => void;
  completedLessons: string[];
  toggleLessonComplete: (lessonId: string) => void;
  favoritePrompts: string[];
  toggleFavoritePrompt: (promptId: string) => void;
  bookmarkedLessons: string[];
  toggleBookmarkLesson: (lessonId: string) => void;
};

const Context = createContext<AppState | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useLocalStorage<'light' | 'dark'>('iadocentes:mode', 'light');
  const [completedLessons, setCompletedLessons] = useLocalStorage<string[]>('iadocentes:completed', []);
  const [favoritePrompts, setFavoritePrompts] = useLocalStorage<string[]>('iadocentes:favorites', []);
  const [bookmarkedLessons, setBookmarkedLessons] = useLocalStorage<string[]>('iadocentes:bookmarks', []);
  const [presenterMode, setPresenterMode] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);

  const value = useMemo<AppState>(
    () => ({
      mode,
      toggleMode: () => setMode((current) => (current === 'dark' ? 'light' : 'dark')),
      presenterMode,
      setPresenterMode,
      commandOpen,
      setCommandOpen,
      completedLessons,
      toggleLessonComplete: (lessonId) =>
        setCompletedLessons((current) =>
          current.includes(lessonId) ? current.filter((id) => id !== lessonId) : [...current, lessonId]
        ),
      favoritePrompts,
      toggleFavoritePrompt: (promptId) =>
        setFavoritePrompts((current) =>
          current.includes(promptId) ? current.filter((id) => id !== promptId) : [...current, promptId]
        ),
      bookmarkedLessons,
      toggleBookmarkLesson: (lessonId) =>
        setBookmarkedLessons((current) =>
          current.includes(lessonId) ? current.filter((id) => id !== lessonId) : [...current, lessonId]
        )
    }),
    [
      bookmarkedLessons,
      completedLessons,
      commandOpen,
      favoritePrompts,
      mode,
      presenterMode,
      setBookmarkedLessons,
      setCompletedLessons,
      setFavoritePrompts,
      setMode
    ]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useAppState() {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useAppState must be used inside AppStateProvider');
  }
  return context;
}
