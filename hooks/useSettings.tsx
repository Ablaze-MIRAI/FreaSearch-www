'use client';

import { FC, createContext, useContext, useState, useRef } from 'react';

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
  const settings = useContext(SettingsContext);

  if (settings === undefined) {
    throw new Error('useSettings must be used within SettingsProvider');
  }

  return settings;
}

interface props {
  children: React.ReactNode;
}

export const SettingsProvider: FC<props> = ({ children }) => {
  return <SettingsContext.Provider value={new Settings()}>{children}</SettingsContext.Provider>;
};
