'use client';

import '../styles/globals.css';
import classNames from 'classnames';
import { Inter, Noto_Sans_JP } from '@next/font/google';
import { SettingsProvider } from 'hooks';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ variable: '--font-inter' });
const notoSansJP = Noto_Sans_JP({ weight: '400', variable: '--font-noto-sans-jp' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={classNames(inter.variable, notoSansJP.variable)}>
      <body className="dark:bg-neutral-900">
        <ThemeProvider attribute="class" defaultTheme="light">
          <SettingsProvider>{children}</SettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
