import { settings } from './settings.utils';
import { notFound } from 'next/navigation';
import { Select, SelectItem } from 'components/Select';

function SettingsPage({ params }: { params: { pageId: string } }) {
  const currentSettings = settings.find((page) => page.pageId === params.pageId)?.settings;

  if (!currentSettings) {
    notFound();
  }

  return (
    <div>
      {currentSettings.map((setting) => (
        // TODO: i18n
        <div className="flex items-center">
          <div key={setting.settingId} className="w-48">
            {setting.settingId}
          </div>
          <div className="flex-grow">
            {setting.type == 'select' ? (
              <Select>
                <SelectItem value="ja">日本語</SelectItem>
                <SelectItem value="en">英語</SelectItem>
              </Select>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SettingsPage;
