'use client';

import { Select, SelectItem } from 'components/Select';
import SettingItem from 'components/SettingItem';
import { useSettings } from 'hooks';

function DesignSettingsPage() {
  const settings = useSettings();
  return (
    <div>
      <SettingItem label="テーマ">
        <Select
          value={settings.theme}
          onValueChange={(theme: 'system' | 'dark' | 'light') => settings.setTheme(theme)}
        >
          <SelectItem value="system">システムに合わせる</SelectItem>
          <SelectItem value="light">ライトテーマ</SelectItem>
          <SelectItem value="dark">ダークテーマ</SelectItem>
        </Select>
      </SettingItem>
    </div>
  );
}

export default DesignSettingsPage;
