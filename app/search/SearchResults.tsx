import { FC } from 'react';
import SearchResultItem from './SearchResultItem';
import SearchResultImageItem from './SearchResultImageItem';
import classNames from 'classnames';
import Button from 'components/Button';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { SettingsType } from 'hooks';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons';

interface Props {
  searchParams: URLSearchParams;
}

// @ts-ignore
const SearchResults: FC<Props> = async ({ searchParams }) => {
  const API_URL = process.env.API_URL;
  const { language } = JSON.parse(cookies().get('settings')?.value ?? '{}') as SettingsType;
  const apiParams = new URLSearchParams(searchParams);
  apiParams.set('pageno', apiParams.get('pageno') || '1');
  apiParams.set('language', language || 'ja-JP');
  const res = await fetch(`${API_URL}/search?${apiParams.toString()}`);
  if (!res.ok) {
    return (
      <div className="py-7 px-2 md:px-28 text-gray-600 mt-2">
        <p>データの取得に失敗しました。少し待ってからやり直してください。</p>
      </div>
    );
  }

  const data = await res.json();
  const isImageTab = apiParams.get('category') === 'images';
  const prevPageParams = new URLSearchParams(apiParams);
  prevPageParams.set('pageno', (parseInt(apiParams.get('pageno') || '1') - 1).toString());
  const nextPageParams = new URLSearchParams(apiParams);
  nextPageParams.set('pageno', (parseInt(apiParams.get('pageno') || '1') + 1).toString());

  return (
    <div className={`py-7 ${isImageTab ? 'px-5' : 'px-2 md:px-28'}`}>
      {data.results.length === 0 ? (
        <div className="text-gray-600 mt-2">
          <p>{apiParams.get('q')}と一致する検索結果が見つかりませんでした...。</p>
          <p>別のキーワードでお試しください。</p>
        </div>
      ) : (
        <div
          className={classNames(
            'flex mt-5 max-w-full bg-white dark:bg-neutral-900 rounded-xl px-7',
            'shadow-[0_3px_25px_-2px_rgba(0,0,0,0.1),0_5px_10px_-6px_rgba(0,0,0,0.1)]',
            'dark:shadow-none dark:border-2 border-neutral-800',
            apiParams.get('category') === 'images'
              ? 'flex-wrap gap-x-3 gap-y-5 py-10'
              : 'w-full md:w-[700px] flex-col space-y-3 py-5'
          )}
        >
          {data.answers.length > 0 && (
            <div className="border dark:border-2 dark:border-neutral-800 p-5 flex flex-col rounded space-y-2 text-sm">
              <div className="font-bold">{apiParams.get('q')}</div>
              <div>{data.answers[0].answer}</div>
            </div>
          )}
          {data.results.map(
            (
              result: {
                url: string;
                img_src: string;
                thumbnail_src: string;
                title: string;
                content: string;
                source: string;
                img_format: string;
                engine: string;
                thumbnail: string;
                category: string;
              },
              index: number
            ) =>
              isImageTab ? (
                <SearchResultImageItem key={result.url} {...result} />
              ) : (
                <SearchResultItem index={index} key={result.url} {...result} />
              )
          )}
          {isImageTab || (
            <div className="flex justify-between">
              <div>
                {parseInt(prevPageParams.get('pageno') as string) > 0 && (
                  <Link href={`/search?${prevPageParams.toString()}`} passHref legacyBehavior>
                    <Button as="a" leftIcon={IconArrowLeft}>
                      前へ
                    </Button>
                  </Link>
                )}
              </div>
              <div>
                <Link href={`/search?${nextPageParams.toString()}`} passHref legacyBehavior>
                  <Button as="a" rightIcon={IconArrowRight}>
                    次へ
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
