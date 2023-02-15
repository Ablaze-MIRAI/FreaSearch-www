import { IconAlertTriangle, IconExternalLink } from '@tabler/icons';
import { FC } from 'react';

interface SnipetProps {
  keyword: string;
  content: string;
  type: 'answer' | 'warning';
  url?: string;
  key?: any;
}

const Snipet: FC<SnipetProps> = ({ keyword, content, type, url, key }) => {
  const isWarning = type === 'warning';
  const title = isWarning ? (
    <div className="flex">
      <IconAlertTriangle className="mr-1 text-yellow-500" />
      警告
    </div>
  ) : (
    keyword
  );

  return (
    <div
      className="border dark:border-2 dark:border-neutral-800 p-5 flex flex-col rounded space-y-2 text-sm"
      key={key}
    >
      <div className="font-bold">{title}</div>
      <div>{content}</div>
      {url && (
        <a href={url} className="flex justify-end text-sky-700">
          詳細情報
          <IconExternalLink size={16} className="ml-1" />
        </a>
      )}
    </div>
  );
};

export default Snipet;
