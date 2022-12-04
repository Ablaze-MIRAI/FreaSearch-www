import { LogoIcon } from 'components/Logo';
import SearchInput from 'components/SearchInput';
import { TabItem, TabList } from 'components/TabList';
import { FC } from 'react';

interface Props {
  type: string;
  searchParams: URLSearchParams;
}

const SearchHeader: FC<Props> = ({ type, searchParams }) => {
  const types = [
    { id: 'all', label: 'All' },
    { id: 'images', label: 'Images' },
    { id: 'videos', label: 'Videos' },
    { id: 'tech', label: 'Tech' },
  ];

  return (
    <div className="relative flex flex-col px-5 pt-9 pb-1 bg-white drop-shadow-md">
      <LogoIcon className="absolute left-0" />
      <SearchInput size="sm" />
      <TabList>
        {types.map((typeItem) => {
          const currentSearchParams = new URLSearchParams(searchParams);
          currentSearchParams.set('type', typeItem.id);

          return (
            <TabItem
              href={`/search/?${currentSearchParams.toString()}`}
              isSelected={typeItem.id === type}
            >
              {typeItem.label}
            </TabItem>
          );
        })}
      </TabList>
    </div>
  );
};

export default SearchHeader;
