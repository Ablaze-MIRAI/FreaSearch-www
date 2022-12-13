import { FC } from 'react';
import SearchResultItem from './SearchResultItem';
import SearchResultImageItem from './SearchResultImageItem';
import classNames from 'classnames';

interface Props {
  searchParams: URLSearchParams;
}

// @ts-ignore
const SearchResults: FC<Props> = async ({ searchParams }) => {
  const API_URL = process.env.API_URL;
  const apiParams = new URLSearchParams(searchParams);
  apiParams.set('pageno', apiParams.get('page') || '1');
  const res = await fetch(`${API_URL}/search?${apiParams.toString()}`);
  const data = await res.json();
  const isImageTab = apiParams.get('category') === 'images';

  if (res.ok) {
    return (
      <div className={`py-7 ${isImageTab ? 'px-5' : 'px-28'}`}>
        {isImageTab || (
          <div className="text-gray-600 text-sm">検索結果: {data.results.length}件</div>
        )}
        {data.results.length === 0 ? (
          <div className="text-gray-600 mt-2">
            <p>{apiParams.get('q')}と一致する検索結果が見つかりませんでした...。</p>
            <p>別のキーワードでお試しください。</p>
          </div>
        ) : (
          <div
            className={classNames(
              'flex mt-5 bg-white rounded-xl px-7',
              'shadow-[0_3px_25px_-2px_rgba(0,0,0,0.1),0_5px_10px_-6px_rgba(0,0,0,0.1)]',
              apiParams.get('category') === 'images'
                ? 'flex-wrap gap-x-3 gap-y-5 py-10'
                : ' w-[700px] flex-col space-y-3 py-5'
            )}
          >
            {data.results.map(
              (
                result: {
                  url: string;
                  img_src: string;
                  thumbnail_src: string;
                  title: string;
                  content: string;
                  source: string;
                  engine: string;
                },
                index: number
              ) =>
                isImageTab ? (
                  <SearchResultImageItem key={result.url} {...result} />
                ) : (
                  <SearchResultItem index={index} key={result.url} {...result} />
                )
            )}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="py-7">
        <div className="text-gray-600 text-sm">検索結果: 0件</div>
        <div className="text-gray-600 mt-2">
          <p>データの取得に失敗しました。</p>
        </div>
      </div>
    );
  }
};

export default SearchResults;
