import { settings } from './settings.utils';
import type { NextPage } from 'next';
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

const SettingsPage: NextPage = () => {
  return (
    <div>
      {settings.map((setting) => (
        <div key={setting.pageId}>{setting.name}</div>
      ))}
    </div>
  );
};

export default SettingsPage;
