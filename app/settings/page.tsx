import { LogoIcon } from 'components/Logo';
import type { NextPage } from 'next';
import { useMenuState } from '@chakra-ui/react';

const SettingsPage: NextPage = () => {
  return (
    <div>
      <div className="flex items-center max-w-2xl mx-auto h-10">
        <LogoIcon className="shrink-0 grow-0" />
        <h1 className="font-bold">Settings</h1>
      </div>
    </div>
  );
};

export default SettingsPage;
