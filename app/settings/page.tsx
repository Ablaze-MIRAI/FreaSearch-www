import { LogoIcon } from 'components/Logo';
import type { NextPage } from 'next';
import { useMenuState } from '@chakra-ui/react';

const SettingsPage: NextPage = () => {
  return (
    <div>
      <div className="flex items-center h-20">
        <LogoIcon className="shrink-0 grow-0" />
      </div>
    </div>
  );
};

export default SettingsPage;
