import { createContext, useContext, ReactNode, FC } from 'react';
import { useCookies } from 'react-cookie';
import { useTheme } from 'next-themes';

const SettingsContext = createContext<Settings>(undefined!);

export interface SettingsType {
  language?: 'ja-JP' | 'en';
  newTab?: boolean;
  shortcut?: boolean;
  theme?: 'light' | 'dark';
}

interface ISettings extends SettingsType {
  cookieData: any;
  setCookies: any;
  onThemeChange: any;

  setLanguage: (language: 'ja-JP' | 'en') => void;
  setNewTab: (newTab: boolean) => void;
  setShortcut: (newTab: boolean) => void;
  setTheme: (newTab: 'light' | 'dark') => void;
}

class Settings implements ISettings {
  cookieData: any;
  setCookies: any;
  onThemeChange: any;

  language: 'ja-JP' | 'en' = 'ja-JP';
  newTab: boolean = false;
  shortcut: boolean = false;
  theme: 'light' | 'dark' = 'light';

  constructor(settings: any, setCookies: any, onThemeChange: any) {
    Object.assign(this, settings);
    this.setCookies = setCookies;
    this.cookieData = settings;
    this.onThemeChange = onThemeChange;
  }

  async saveSettings(key: keyof Settings, value: any) {
    this[key] = value;
    this.cookieData[key] = value;
    this.setCookies('settings', this.cookieData, { path: '/' });
  }

  setLanguage(language: 'ja-JP' | 'en') {
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
    this.onThemeChange(theme);
  }
}

interface Props {
  children: ReactNode;
}

export const SettingsProvider: FC<Props> = ({ children }) => {
  const [cookies, setCookie] = useCookies(['settings']);
  const settingData = cookies.settings || {};
  const { setTheme } = useTheme();

  const settings = new Settings(settingData, setCookie, (theme: 'light' | 'dark') => {
    setTheme(theme);
  });

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
  children: ReactNode;
}

export default SettingsProvider;
