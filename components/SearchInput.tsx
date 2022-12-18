'use client';

import { FC, useEffect, useRef, useState } from 'react';
import Input, { InputProps } from './Input';
import IconButton from './IconButton';
import { IconArrowRight, IconLoader2, IconSearch } from '@tabler/icons';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';
import { useSettings } from 'hooks';

export interface SearchInputParams extends InputProps {
  defaultParams?: URLSearchParams;
}

const SearchInput: FC<SearchInputParams> = ({ className, defaultParams, ...props }) => {
  const router = useRouter();
  const keywordInputRef = useRef<HTMLInputElement>(null!);
  const { shortcut } = useSettings();
  const [isLoading, setIsLoading] = useState(false);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (shortcut) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === '/' && !focus) {
          e.preventDefault();
          keywordInputRef.current.focus();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [shortcut, focus]);

  const handleSearch = () => {
    const keyword = keywordInputRef.current.value;
    if (keyword !== '') {
      setIsLoading(true);
      const newParams = new URLSearchParams(defaultParams);
      newParams.set('q', keyword);
      router.replace(`/search?${newParams?.toString()}`);
    }
  };

  return (
    <form
      onSubmitCapture={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <Input
        placeholder="検索する..."
        leftItem={<IconSearch className="ml-5" />}
        rightItem={
          <IconButton className="!h-full w-16 rounded-none rounded-r-full" onClick={handleSearch}>
            {/* {isLoading ? <IconLoader2 className="animate-spin" /> : <IconArrowRight />} */}
            <IconArrowRight />
          </IconButton>
        }
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={classNames('outline-none transition', className)}
        ref={keywordInputRef}
        {...props}
      />
    </form>
  );
};

export default SearchInput;
