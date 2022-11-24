import { useState } from 'react';

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

export function useSettings() {
  const [settings] = useState<Settings>(new Settings());

  return settings;
}
