'use client';

import Button from 'components/Button';
import { Select, SelectItem } from 'components/Select';
import SettingItem from 'components/SettingItem';
import Switch from 'components/Switch';
import { useSettings } from 'hooks';

function SettingsPage() {
  const settings = useSettings();

  return (
    <div>
      <SettingItem label="言語">
        <Select
          value={settings.language}
          onValueChange={(language: 'ja' | 'en') => settings.setLanguage(language)}
        >
          <SelectItem value="ja">日本語</SelectItem>
          <SelectItem value="en">英語</SelectItem>
        </Select>
      </SettingItem>
      <SettingItem label="検索の最適化">
        <Switch />
      </SettingItem>
      <div className="flex flex-row-reverse">
        <Button>保存</Button>
      </div>
    </div>
  );
}

export default SettingsPage;
