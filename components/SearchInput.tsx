'use client';

import { FC } from 'react';
import Input, { InputProps } from './Input';
import IconButton from './IconButton';
import { IconArrowRight, IconSearch } from '@tabler/icons';

const SearchInput: FC<InputProps> = ({ ...props }) => {
  const handleSearch = () => {
    console.log('submit');
  };
  return (
    <Input
      placeholder="検索する..."
      leftItem={<IconSearch className="ml-5" />}
      rightItem={
        <IconButton className="h-full w-16 rounded-none rounded-r-full" onClick={handleSearch}>
          <IconArrowRight />
        </IconButton>
      }
      onKeyUpCapture={(e) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      }}
      className="mt-12 outline-none transition"
      {...props}
    />
  );
};

export default SearchInput;
