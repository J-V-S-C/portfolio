'use client';

import { useEffect, useState } from 'react';

type Mode = 'light' | 'dark';

export const useDarkMode = () => {
  const [mode, setMode] = useState<Mode>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Mode | null;
    if (savedTheme) {
      setMode(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const changeMode = (newMode: Mode) => {
    setMode(newMode);
    localStorage.setItem('theme', newMode);

    if (newMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return { mode, changeMode };
};
