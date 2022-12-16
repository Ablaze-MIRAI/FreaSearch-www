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
      <SettingItem label="検索言語">
        <Select
          value={settings.language}
          onValueChange={(language: 'ja' | 'en') => settings.setLanguage(language)}
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
    </div>
  );
};

export default GeneralSettingsPage;
