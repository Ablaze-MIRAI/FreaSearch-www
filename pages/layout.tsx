import classNames from 'classnames';
import { Inter, Noto_Sans_JP } from '@next/font/google';

const inter = Inter();
const notoSansJP = Noto_Sans_JP({ weight: '400' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={classNames(inter.className, notoSansJP.className)}>
      <body>{children}</body>
    </html>
  );
}
