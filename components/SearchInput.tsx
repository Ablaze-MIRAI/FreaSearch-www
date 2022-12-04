'use client';

import { createRef, FC, useRef } from 'react';
import Input, { InputProps } from './Input';
import IconButton from './IconButton';
import { IconArrowRight, IconSearch } from '@tabler/icons';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';

const SearchInput: FC<InputProps> = ({ className, ...props }) => {
  const router = useRouter();
  const keywordInputRef = useRef<HTMLInputElement>(null!);

  const handleSearch = () => {
    const keyword = keywordInputRef.current.value;
    if (keyword !== '') {
      router.push(`/search?q=${keyword}`);
    }
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
      className={classNames('outline-none transition', className)}
      ref={keywordInputRef}
      {...props}
    />
  );
};

export default SearchInput;
