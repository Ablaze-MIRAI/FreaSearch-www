import { FC } from 'react';
import { SettingsProvider as ClientSettingsProvider } from './useSettings';

interface props {
  children: React.ReactNode;
}
const SettingsProvider: FC<props> = ({ children }) => {
  return <ClientSettingsProvider value={{ language: 'ja' }}>{children}</ClientSettingsProvider>;
};

export default SettingsProvider;
