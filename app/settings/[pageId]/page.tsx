import { settings } from './settings.utils';
import { notFound } from 'next/navigation';
import { Select, SelectItem } from 'components/Select';
import SettingItem from 'components/SettingItem';

function SettingsPage({ params }: { params: { pageId: string } }) {
  const currentSettings = settings.find((page) => page.pageId === params.pageId)?.settings;

  if (!currentSettings) {
    notFound();
  }

  return (
    <div>
      <SettingItem label="言語">
        <Select>
          <SelectItem value="ja">日本語</SelectItem>
          <SelectItem value="en">英語</SelectItem>
        </Select>
      </SettingItem>
    </div>
  );
}

export default SettingsPage;
