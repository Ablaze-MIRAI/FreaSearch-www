import { settings } from './settings.utils';
import { notFound } from 'next/navigation';
import { Select, SelectOption } from 'components/Select';

function SettingsPage({ params }: { params: { pageId: string } }) {
  const currentSettings = settings.find((page) => page.pageId === params.pageId)?.settings;

  if (!currentSettings) {
    notFound();
  }

  return (
    <div>
      {currentSettings.map((setting) => (
        // TODO: i18n
        <div className="flex">
          <div key={setting.settingId} className="w-48">
            {setting.settingId}
          </div>
          <div className="flex-grow">
            {setting.type == 'select' ? (
              <Select>
                <SelectOption value="ja">日本語</SelectOption>
                <SelectOption value="en">英語</SelectOption>
              </Select>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SettingsPage;
