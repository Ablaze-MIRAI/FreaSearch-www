'use client';

import { Select, SelectItem } from 'components/Select';
import SettingItem from 'components/SettingItem';
import Switch from 'components/Switch';
import { useSettings } from 'hooks';
import { NextPage } from 'next';

const GeneralSettingsPage: NextPage = () => {
  const settings = useSettings();

  return (
    <div>
      <SettingItem label="テーマ">
        <Select
          value={settings.theme}
          onValueChange={(theme: 'dark' | 'light') => settings.setTheme(theme)}
        >
          <SelectItem value="light">ライトテーマ</SelectItem>
          <SelectItem value="dark">ダークテーマ</SelectItem>
        </Select>
      </SettingItem>
    </div>
  );
};

export default GeneralSettingsPage;
