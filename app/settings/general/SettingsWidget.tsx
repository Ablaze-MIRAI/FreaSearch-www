'use client';

import { Select, SelectItem } from 'components/Select';
import SettingItem from 'components/SettingItem';
import Switch from 'components/Switch';
import { useSettings } from 'hooks';
import { FC } from 'react';

const SettingsWidget: FC = () => {
  const settings = useSettings();
  return (
    <>
      <SettingItem label="検索言語">
        <Select
          value={settings.language}
          onValueChange={(language: 'ja-JP' | 'en') => settings.setLanguage(language)}
        >
          <SelectItem value="ja-JP">🇯🇵 日本語</SelectItem>
          <SelectItem value="en">🇺🇸 English</SelectItem>
          <SelectItem value="zh">🇨🇳 中文</SelectItem>
        </Select>
      </SettingItem>
      <SettingItem label="検索結果を新しいタブで開く">
        <Switch
          checked={settings.newTab}
          onCheckedChange={(newTab: boolean) => settings.setNewTab(newTab)}
        />
      </SettingItem>
      <SettingItem label={'"/"キーで検索'}>
        <Switch
          checked={settings.shortcut}
          onCheckedChange={(shortcut: boolean) => settings.setShortcut(shortcut)}
        />
      </SettingItem>
    </>
  );
};

export default SettingsWidget;
