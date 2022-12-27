'use client';

import { Select, SelectItem } from 'components/Select';
import SettingItem from 'components/SettingItem';
import { useSettings } from 'hooks';
import { FC } from 'react';

const SettignsWidget: FC = () => {
  const settings = useSettings();
  return (
    <SettingItem label="テーマ">
      <Select
        value={settings.theme}
        onValueChange={(theme: 'dark' | 'light') => settings.setTheme(theme)}
      >
        <SelectItem value="light">ライトテーマ</SelectItem>
        <SelectItem value="dark">ダークテーマ</SelectItem>
      </Select>
    </SettingItem>
  );
};

export default SettignsWidget;
