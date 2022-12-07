'use client';

import { FC, useEffect, useRef } from 'react';

interface Props {
  url: string;
  title: string;
  content: string;
  index: number;
}

const SearchResultItem: FC<Props> = ({ url, title, content, index }) => {
  const delay = (index + 1) * 100;
  const SearchResultElement = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const element = SearchResultElement.current;
    setTimeout(() => {
      element.classList.remove('opacity-0');
    }, delay);
  }, []);

  return (
    <div
      className={`flex flex-col py-2 opacity-0 transition-opacity duration-500`}
      ref={SearchResultElement}
    >
      <a href={url} className="text-blue-700">
        {title}
      </a>
      <span className="text-xs mb-2">{url}</span>
      <span className="text-gray-600 text-xs">{content}</span>
    </div>
  );
};

export default SearchResultItem;
