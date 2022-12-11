import Image from 'next/image';
import { FC } from 'react';

interface Props {
  url: string;
  image_src: string;
  thumbnail_src: string;
  title: string;
  content: string;
  engine: string;
  index: number;
}

const SearchResultImageItem: FC<Props> = ({
  url,
  image_src,
  thumbnail_src,
  title,
  content,
  engine,
  index,
}) => {
  return (
    <div className="border rounded-lg p-5">
      <div className="max-w-xs mx-auto">
        <div className="relative h-[200px]">
          <Image
            src={thumbnail_src}
            alt={title}
            height={200}
            width={200}
            className="h-full w-full object-contain mx-auto"
          />
        </div>
        <div className="overflow-hidden text-ellipsis mt-3">{title}</div>
        <div className="overflow-hidden text-ellipsis text-xs text-gray-400">{url}</div>
      </div>
    </div>
  );
};

export default SearchResultImageItem;
