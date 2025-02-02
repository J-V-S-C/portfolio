'use client';

import { useCallback, useEffect, useState } from 'react';

type Mode = 'light' | 'dark' | 'system';

export const useDarkMode = () => {
  const [mode, setMode] = useState<Mode>('system');

  const applyTheme = useCallback((isDark: boolean) => {
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const changeMode = useCallback((newMode: Mode) => {
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Mode | null;
    if (savedTheme) {
      setMode(savedTheme);
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      if (mode === 'system') {
        applyTheme(event.matches);
      }
    };

    const applyCurrentTheme = () => {
      if (mode === 'system') {
        applyTheme(mediaQuery.matches);
      } else {
        applyTheme(mode === 'dark');
      }
    };

    applyCurrentTheme();

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [mode, applyTheme]);

  return { mode, changeMode };
};
