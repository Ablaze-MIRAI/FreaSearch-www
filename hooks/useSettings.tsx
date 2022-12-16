'use client';

import { createContext, useContext, ReactNode, FC } from 'react';
import { useCookies } from 'react-cookie';
import { CookieSetOptions } from 'universal-cookie';

const SettingsContext = createContext<Settings>(undefined!);

export interface SettingsType {
  language?: 'ja' | 'en';
  newTab?: boolean;
  shortcut?: boolean;
  theme?: 'light' | 'dark';
}

interface ISettings extends SettingsType {
  setCookies: (name: 'settings', value: any, options?: CookieSetOptions) => void;
  cookieData: any;

  setLanguage: (language: 'ja' | 'en') => void;
  setNewTab: (newTab: boolean) => void;
  setShortcut: (newTab: boolean) => void;
  setTheme: (newTab: 'light' | 'dark') => void;
}

class Settings implements ISettings {
  cookieData: any;

  language: 'ja' | 'en' = 'ja';
  newTab: boolean = false;
  shortcut: boolean = false;
  theme: 'light' | 'dark' = 'light';

  setCookies: (name: 'settings', value: any, options?: CookieSetOptions) => void;

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

  setNewTab(newTab: boolean) {
    this.saveSettings('newTab', newTab);
  }

  setShortcut(shortcut: boolean) {
    this.saveSettings('shortcut', shortcut);
  }

  setTheme(theme: 'light' | 'dark') {
    this.saveSettings('theme', theme);
  }
}

interface Props {
  children: ReactNode;
}

export const SettingsProvider: FC<Props> = ({ children }) => {
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
interface Props {
  children: React.ReactNode;
}

export default SettingsProvider;
