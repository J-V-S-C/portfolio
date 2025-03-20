'use client';

import { Switch } from '@/components/ui/switch';
import React from 'react';
import { useDarkModeContext } from './DarkModeProvider';

interface ThemeToggleButtonProps {
  classname?: string;
}

export const ThemeTroggleButton: React.FC<ThemeToggleButtonProps> = ({
  classname,
}) => {
  const { mode, changeMode } = useDarkModeContext();

  return (
    <div className={classname}>
      {' '}
      <Switch
        checked={mode === 'dark'}
        onCheckedChange={(checked) => changeMode(checked ? 'dark' : 'light')}
      />
    </div>
  );
};
