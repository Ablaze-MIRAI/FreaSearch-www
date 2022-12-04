'use client';

import { LogoIcon } from 'components/Logo';
import { TabList, TabItem } from 'components/TabList';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const slug = pathname?.split('/')[2];
  const settings = [
    { slug: 'general', name: 'General' },
    { slug: 'design', name: 'Design' },
    { slug: 'privacy', name: 'Privacy' },
    { slug: 'serachengine', name: 'Serach Engine' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center space-x-10 h-16">
        <Link href="/">
          <LogoIcon className="shrink-0 grow-0" />
        </Link>
        <h1 className="font-semibold text-lg">Settings</h1>
        <TabList>
          {settings.map((page) => (
            <TabItem href={`/settings/${page.slug}`} isSelected={page.slug === slug}>
              {page.name}
            </TabItem>
          ))}
        </TabList>
      </div>
      <div className="px-20 mt-5">{children}</div>
    </div>
  );
}
