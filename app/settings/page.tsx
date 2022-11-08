import { LogoIcon } from 'components/Logo';
import type { NextPage } from 'next';
import { TabList, TabItem } from 'components/TabList';

const SettingsPage: NextPage = () => {
  return (
    <div>
      <div className="flex items-center max-w-2xl space-x-10 mx-auto h-16">
        <LogoIcon className="shrink-0 grow-0" />
        <h1 className="font-semibold text-lg">Settings</h1>
        <TabList>
          <TabItem href="/settings/general">General</TabItem>
          <TabItem href="/settings/design">Design</TabItem>
          <TabItem href="/settings/privacy">Privacy</TabItem>
        </TabList>
      </div>
    </div>
  );
};

export default SettingsPage;
