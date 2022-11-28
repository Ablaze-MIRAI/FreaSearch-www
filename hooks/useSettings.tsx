'use client';

import { FC, createContext, useContext, useState, useRef } from 'react';
import useSWR from 'swr';

interface ISettings {
  language: 'ja' | 'en';

  setLanguage: (language: 'ja' | 'en') => void;
}

class Settings implements ISettings {
  language: 'ja' | 'en' = 'ja';

  async saveSettings(key: keyof Settings, value: any) {
    this[key] = value;

    const updatedSettings = await fetch('/api/settings', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this),
    }).then((res) => res.json());
    mutate('/api/settings', updatedSettings);
  }

  setLanguage(language: 'ja' | 'en') {
    this.saveSettings('language', language);
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
  const settings = useSWR('/api/settings');

  return <SettingsContext.Provider value={new Settings()}>{children}</SettingsContext.Provider>;
};
