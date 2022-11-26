'use client';

import { FC, createContext, useContext } from 'react';

interface ISettings {
  language: 'ja' | 'en';

  setLanguage: (language: 'ja' | 'en') => void;
}

class Settings implements ISettings {
  language: 'ja' | 'en' = 'ja';

  setLanguage(language: 'ja' | 'en') {
    this.language = language;
  }
}

const SettingsContext = createContext<Settings>(undefined!);

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within SettingsProvider');
  }

  return context;
}

interface props {
  children: React.ReactNode;
}

export const SettingsProvider: FC<props> = ({ children }) => {
  return <SettingsContext.Provider value={new Settings()}>{children}</SettingsContext.Provider>;
};
