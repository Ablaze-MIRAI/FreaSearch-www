import 'styles/globals.css';
import { LogoIcon } from 'components/Logo';
import { TabList, TabItem } from 'components/TabList';
import { SettingsProvider } from 'hooks';
import Link from 'next/link';

export default function SettingsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { pageId: string };
}) {
  const settings = [
    { pageId: 'general', name: 'General' },
    { pageId: 'design', name: 'Design' },
    { pageId: 'privacy', name: 'Privacy' },
    { pageId: 'serachengine', name: 'Serach Engine' },
  ];
  return (
    <SettingsProvider>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-10 h-16">
          <Link href="/">
            <LogoIcon className="shrink-0 grow-0" />
          </Link>
          <h1 className="font-bold text-lg">Settings</h1>
          <TabList>
            {settings.map((page) => (
              <TabItem href={`/settings/${page.pageId}`} isSelected={page.pageId === params.pageId}>
                {page.name}
              </TabItem>
            ))}
          </TabList>
        </div>
        <div className="px-20 mt-5">{children}</div>
      </div>
    </SettingsProvider>
  );
}
