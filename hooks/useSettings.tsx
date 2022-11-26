'use client';

import { FC, createContext, useContext, useState } from 'react';

interface ISettings {
  language: 'ja' | 'en';

  setSettings: (settings: ISettings) => void;
  saveSettings: (settings: ISettings) => void;
  setLanguage: (language: 'ja' | 'en') => void;
}

class Settings implements ISettings {
  language: 'ja' | 'en' = 'ja';
  setSettings: (settings: ISettings) => void;

  constructor(setSettings: (settings: ISettings) => void) {
    this.setSettings = setSettings;
  }

  saveSettings(settings: ISettings) {
    this.setSettings(settings);
  }

  setLanguage(language: 'ja' | 'en') {
    this.language = language;
    this.saveSettings(this);
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
  const [settings, setSettings] = useState<ISettings>(undefined!);
  if (!settings) setSettings(new Settings(setSettings));
  return <SettingsContext.Provider value={settings}>{children}</SettingsContext.Provider>;
};
