import { settings } from './settings.utils';
import { notFound } from 'next/navigation';

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
        </div>
      ))}
    </div>
  );
}

export default SettingsPage;
