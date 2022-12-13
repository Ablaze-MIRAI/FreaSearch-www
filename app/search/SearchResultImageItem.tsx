import { IconExternalLink } from '@tabler/icons';
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
  engine: string;
}

const SearchResultImageItem: FC<Props> = ({ url, img_src, thumbnail_src, title, engine }) => {
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
        <Image src={img_src} alt={title} height={300} width={300} className="mb-3" />
        <div className="text-gray-400 text-xs mb-3 mt-5 break-all">
          <div>{url}</div>
        </div>
        <div className="text-xs">
          <div>ソース: {engine}</div>
          <div>エンジン: {engine}</div>
        </div>
        <div className="flex flex-row-reverse mt-7">
          <Button>
            サイトにアクセスする
            <IconExternalLink size={16} className="ml-1" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchResultImageItem;
