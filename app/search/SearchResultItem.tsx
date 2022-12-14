'use client';

import Image from 'next/image';
import { FC, useEffect, useRef } from 'react';

interface Props {
  url: string;
  title: string;
  content: string;
  engine: string;
  thumbnail: string;
  category: string;
  index: number;
}

const SearchResultItem: FC<Props> = ({
  url,
  title,
  content,
  engine,
  thumbnail,
  category,
  index,
}) => {
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
      className={`flex py-2 opacity-0 transition-opacity duration-500`}
      ref={SearchResultElement}
    >
      {category === 'videos' && (
        <Image
          src={thumbnail}
          width={300}
          height={300}
          alt=""
          className="object-cover w-[100px] h-[75px] rounded-sm mr-5"
        />
      )}
      <div className="flex flex-col flex-grow min-w-0">
        <a href={url} className="text-blue-700 whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </a>
        <div className="text-xs mb-2 whitespace-nowrap overflow-hidden text-ellipsis">{url}</div>
        <div className="text-gray-600 text-xs">{content}</div>
        <div className="flex text-xs text-gray-400 mt-1 flex-row-reverse">{engine}</div>
      </div>
    </div>
  );
};

export default SearchResultItem;
