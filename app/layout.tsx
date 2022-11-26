import '../styles/globals.css';
import classNames from 'classnames';
import { Inter, Noto_Sans_JP } from '@next/font/google';
import { SettingsProvider } from 'hooks';

const inter = Inter({ variable: '--font-inter' });
const notoSansJP = Noto_Sans_JP({ weight: '400', variable: '--font-noto-sans-jp' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SettingsProvider>
      <html lang="en" className={classNames(inter.variable, notoSansJP.variable)}>
        <body>{children}</body>
      </html>
    </SettingsProvider>
  );
}
