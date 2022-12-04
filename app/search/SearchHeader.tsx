import { LogoIcon } from 'components/Logo';
import SearchInput from 'components/SearchInput';
import { TabItem, TabList } from 'components/TabList';
import { FC } from 'react';

interface Props {
  searchParams: URLSearchParams;
}

const SearchHeader: FC<Props> = ({ searchParams }) => {
  const types = [
    { id: 'all', label: 'All' },
    { id: 'images', label: 'Images' },
    { id: 'videos', label: 'Videos' },
    { id: 'tech', label: 'Tech' },
  ];

  return (
    <div className="relative flex flex-col px-28 pt-7 pb-1 bg-white drop-shadow-md">
      <LogoIcon className="absolute left-0 h-9 mt-2 ml-10" />
      <div className="w-[500px]">
        <SearchInput className="mb-3" />
        <TabList>
          {types.map((type) => {
            const currentSearchParams = new URLSearchParams(searchParams);
            currentSearchParams.set('type', type.id);

            return (
              <TabItem
                href={`/search/?${currentSearchParams.toString()}`}
                isSelected={type.id === searchParams.get('type')}
              >
                {type.label}
              </TabItem>
            );
          })}
        </TabList>
      </div>
    </div>
  );
};

export default SearchHeader;
