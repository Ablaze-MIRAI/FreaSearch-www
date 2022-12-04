'use client';

import { createRef, FC, useRef } from 'react';
import Input, { InputProps } from './Input';
import IconButton from './IconButton';
import { IconArrowRight, IconSearch } from '@tabler/icons';
import { useRouter } from 'next/navigation';

const SearchInput: FC<InputProps> = ({ ...props }) => {
  const router = useRouter();
  const keyWordInputRef = useRef<HTMLInputElement>(null!);

  const handleSearch = () => {
    console.log(keyWordInputRef);
    router.push(`/search?q=${keyWordInputRef.current.value}`);
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
      ref={keyWordInputRef}
      {...props}
    />
  );
};

export default SearchInput;
