import { LogoIcon } from 'components/Logo';
import type { NextPage } from 'next';
import { TabList, TabItem } from 'components/TabList';
import { settingPages } from '../settings.utils';

const SettingsPage: NextPage = ({ params }: { params: { pageId: string } }) => {
  return (
    <div>
      <div className="flex items-center max-w-4xl space-x-10 mx-auto h-16">
        <LogoIcon className="shrink-0 grow-0" />
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
    </div>
  );
};

export default SettingsPage;
