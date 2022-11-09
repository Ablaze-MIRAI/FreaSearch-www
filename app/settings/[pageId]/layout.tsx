import 'styles/globals.css';
import classNames from 'classnames';
import { Inter, Noto_Sans_JP } from '@next/font/google';
import { LogoIcon } from 'components/Logo';
import { TabList, TabItem } from 'components/TabList';
import { settingPages } from './settings.utils';
import Link from 'next/link';

export default function SettingsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { pageId: string };
}) {
  return (
    <>
      <div className="flex items-center max-w-4xl space-x-10 mx-auto h-16">
        <Link href="/">
          <LogoIcon className="shrink-0 grow-0" />
        </Link>
        <h1 className="font-semibold text-lg">Settings</h1>
        <TabList>
          {settingPages.map((page) => (
            <TabItem
              key={page.pageId}
              href={`/settings/${page.pageId}`}
              isSelected={page.pageId === params.pageId}
            >
              {page.name}
            </TabItem>
          ))}
        </TabList>
      </div>
      {children}
    </>
  );
}
