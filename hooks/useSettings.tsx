'use client';

import { createContext, useContext, ReactNode, FC } from 'react';
import { useCookies } from 'react-cookie';
import { CookieSetOptions } from 'universal-cookie';

const SettingsContext = createContext<Settings>(undefined!);

interface ISettings {
  setCookies: (name: 'settings', value: any, options?: CookieSetOptions) => void;
  cookieData: any;

  language: 'ja' | 'en';

  setLanguage: (language: 'ja' | 'en') => void;
}

class Settings implements ISettings {
  language: 'ja' | 'en' = 'ja';
  setCookies: (name: 'settings', value: any, options?: CookieSetOptions) => void;
  cookieData: any;

  constructor(
    settings: any,
    setCookies: (name: 'settings', value: any, options?: CookieSetOptions) => void
  ) {
    Object.assign(this, settings);
    this.setCookies = setCookies;
    this.cookieData = settings;
  }

  async saveSettings(key: keyof Settings, value: any) {
    this[key] = value;
    this.cookieData[key] = value;
    this.setCookies('settings', this.cookieData, { path: '/' });
  }

  setLanguage(language: 'ja' | 'en') {
    this.saveSettings('language', language);
  }
}

interface props {
  children: ReactNode;
}

export const SettingsProvider: FC<props> = ({ children }) => {
  const [cookies, setCookie] = useCookies(['settings']);
  const settingData = cookies.settings || {};

  const settings = new Settings(settingData, setCookie);
  return <SettingsContext.Provider value={settings}>{children}</SettingsContext.Provider>;
};

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

export default SettingsProvider;
