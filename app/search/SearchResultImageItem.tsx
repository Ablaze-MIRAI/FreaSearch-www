import { IconArrowUpRight, IconExternalLink } from '@tabler/icons';
import Button from 'components/Button';
import { Dialog, DialogContent, DialogTrigger } from 'components/Dialog';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  url: string;
  img_src: string;
  thumbnail_src: string;
  title: string;
  content: string;
  source: string;
  img_format: string;
  engine: string;
}

const SearchResultImageItem: FC<Props> = ({
  url,
  img_src,
  thumbnail_src,
  title,
  source,
  img_format,
  engine,
}) => {
  const imageUrl = new URL(img_src).protocol === 'http:' ? thumbnail_src : img_src;
  const [imgSizeW, imgSizeH] = img_format.match(/(\d*)\s.\s(\d*)/)?.slice(1) || [0, 0];

  return (
    <Dialog>
      <DialogTrigger>
        <div className="border rounded-lg px-5 pt-5 pb-14 hover:bg-gray-50 transition-colors grow max-w-xs cursor-pointer">
          <div className="max-w-[260px] mx-auto">
            <div className="relative h-[140px]">
              <Image
                src={thumbnail_src}
                alt={title}
                height={200}
                width={200}
                className="h-full w-full object-contain mx-auto"
              />
              <div className="absolute w-full">
                <div className="whitespace-nowrap overflow-hidden text-ellipsis text-sm mt-2">
                  {title}
                </div>
                <div className="whitespace-nowrap overflow-hidden text-ellipsis text-xs text-gray-400">
                  {url}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent title={title} className="w-[300px] box-content">
        <div className="relative">
          <Image src={imageUrl} alt={title} height={300} width={300} className="mb-3" />
          <span className="absolute bottom-2 left-2 bg-white/90 rounded-md font-mono px-3 py-1 shadow-sm">
            {imgSizeW} x {imgSizeH}
          </span>
        </div>
        <div className="text-gray-400 text-xs mb-3 mt-5 break-all">{url}</div>
        <div className="text-xs">
          <div>ソース: {source}</div>
          <div>エンジン: {engine}</div>
        </div>
        <div className="flex flex-row-reverse mt-7">
          <Link href={url} legacyBehavior>
            <Button as="a" rightIcon={IconArrowUpRight}>
              サイトにアクセスする
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchResultImageItem;
