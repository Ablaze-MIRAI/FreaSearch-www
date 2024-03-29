import {
  IconNews,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTool,
  IconVideo,
  TablerIcon,
} from '@tabler/icons';
import classNames from 'classnames';
import IconButton from 'components/IconButton';
import { LogoIcon } from 'components/Logo';
import SearchInput from 'components/SearchInput';
import { TabItem, TabList } from 'components/TabList';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  searchParams: URLSearchParams;
}

const categories = [
  { id: 'general', label: 'All', icon: IconSearch },
  { id: 'images', label: 'Images', icon: IconPhoto },
  { id: 'videos', label: 'Videos', icon: IconVideo },
  { id: 'news', label: 'News', icon: IconNews },
  { id: 'it', label: 'Tech', icon: IconTool },
];

const SearchHeader: FC<Props> = ({ searchParams }) => {
  return (
    <div
      className={classNames(
        'relative flex flex-col px-2 md:px-28 pt-3 md:pt-7 pb-1 bg-white dark:bg-neutral-900 shadow-md dark:shadow-none',
        'dark:border-b-2 dark:border-neutral-800'
      )}
    >
      <Link href="/" prefetch={false}>
        <LogoIcon className="absolute left-5 md:left-10 h-9 mt-2" />
      </Link>
      <div className="w-full md:w-[500px] pt-16 md:pt-0">
        <SearchInput
          defaultValue={searchParams.get('q') as string}
          defaultParams={searchParams}
          className="mb-3"
        />
        <TabList>
          {categories.map((category: { id: string; label: string; icon: TablerIcon }) => {
            const currentSearchParams = new URLSearchParams(searchParams);
            currentSearchParams.set('category', category.id);
            const isSelected = category.id === (searchParams.get('category') || 'general');
            const TabIcon: FC = () => {
              const Icon = category.icon;
              return (
                <Icon
                  size={16}
                  className={
                    (isSelected ? 'text-brand' : 'text-gray-700 dark:text-neutral-300') as string
                  }
                />
              );
            };

            return (
              <TabItem
                key={category.id}
                href={`/search/?${currentSearchParams.toString()}`}
                isSelected={isSelected}
                className="flex items-center space-x-2"
              >
                <span>{category.label}</span>
                <TabIcon />
              </TabItem>
            );
          })}
        </TabList>
      </div>
      <Link href="/settings" passHref legacyBehavior>
        <IconButton as="a" className="absolute mt-1 right-5 md:right-10">
          <IconSettings />
        </IconButton>
      </Link>
    </div>
  );
};

export default SearchHeader;
