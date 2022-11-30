'use client';

import { createContext, useContext, ReactNode, FC } from 'react';

const SettingsContext = createContext<Settings>(undefined!);

interface ISettings {
  language: 'ja' | 'en';

  setLanguage: (language: 'ja' | 'en') => void;
}

class Settings implements ISettings {
  language: 'ja' | 'en' = 'ja';

  constructor(settings: any) {
    Object.assign(this, settings);
  }

  async saveSettings(key: keyof Settings, value: any) {
    this[key] = value;

    const updatedSettings = await fetch('/api/settings', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this),
    }).then((res) => res.json());
  }

  setLanguage(language: 'ja' | 'en') {
    this.saveSettings('language', language);
  }
}

interface props {
  value: any;
  children: ReactNode;
}

export const SettingsProvider: FC<props> = ({ value, children }) => {
  return (
    <SettingsContext.Provider value={new Settings(value)}>{children}</SettingsContext.Provider>
  );
};

export function useSettings() {
  const settings = useContext(SettingsContext);

  if (settings === undefined) {
    throw new Error('useSettings must be used within SettingsProvider');
  }

  return settings;
}
