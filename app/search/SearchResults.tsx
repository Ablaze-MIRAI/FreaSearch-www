import { FC } from 'react';
import SearchResultItem from './SearchResultItem';

interface Props {
  searchParams: URLSearchParams;
}

// @ts-ignore
const SearchResults: FC<Props> = async ({ searchParams }) => {
  const API_URL = process.env.API_URL;
  const data = await fetch(`${API_URL}/search?${searchParams.toString()}`).then((res) =>
    res.json()
  );

  return (
    <div className="py-7">
      <div className="text-gray-600 text-sm">検索結果: {data.results.length}件</div>
      <div className="flex flex-col space-y-3 mt-5 bg-white rounded-xl px-7 py-5 w-[700px] shadow-[0_3px_25px_-2px_rgba(0,0,0,0.1),0_5px_10px_-6px_rgba(0,0,0,0.1)]">
        {data.results.map(
          (
            result: { url: string; title: string; content: string; engine: string },
            index: number
          ) => (
            <SearchResultItem index={index} key={index} {...result} />
          )
        )}
      </div>
    </div>
  );
};

export default SearchResults;
