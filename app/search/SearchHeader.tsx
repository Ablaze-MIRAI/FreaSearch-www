import { IconSettings } from '@tabler/icons';
import IconButton from 'components/IconButton';
import { LogoIcon } from 'components/Logo';
import SearchInput from 'components/SearchInput';
import { TabItem, TabList } from 'components/TabList';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  searchParams: URLSearchParams;
}

const SearchHeader: FC<Props> = ({ searchParams }) => {
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'images', label: 'Images' },
    { id: 'videos', label: 'Videos' },
    { id: 'tech', label: 'Tech' },
  ];

  return (
    <div className="relative flex flex-col px-28 pt-7 pb-1 bg-white drop-shadow-md">
      <LogoIcon className="absolute left-10 h-9 mt-2" />
      <div className="w-[500px]">
        <SearchInput defaultValue={searchParams.get('q') as string} className="mb-3" />
        <TabList>
          {categories.map((category) => {
            const currentSearchParams = new URLSearchParams(searchParams);
            currentSearchParams.set('category', category.id);

            return (
              <TabItem
                href={`/search/?${currentSearchParams.toString()}`}
                isSelected={category.id === searchParams.get('category')}
              >
                {category.label}
              </TabItem>
            );
          })}
        </TabList>
      </div>
      <Link href="/settings" legacyBehavior>
        <IconButton as="a" className="absolute right-10">
          <IconSettings />
        </IconButton>
      </Link>
    </div>
  );
};

export default SearchHeader;
