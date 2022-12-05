import { FC } from 'react';

interface Props {
  searchParams: URLSearchParams;
}

// @ts-ignore Server Component
const SearchResults: FC<Props> = async ({ searchParams }) => {
  const API_URL = process.env.API_URL;
  const data = await fetch(`${API_URL}/search?${searchParams.toString()}`).then((res) =>
    res.json()
  );
  return (
    <div>
      <div className="mt-5 text-gray-600 text-sm">検索結果: {data.results.length}件</div>
      <div className="flex flex-col space-y-3 mt-3">
        {data.results.map((result: { id: string; url: string; title: string; content: string }) => (
          <div key={result.url} className="flex flex-col py-2">
            <a href={result.url} className="text-blue-700">
              {result.title}
            </a>
            <span className=" text-xs">{result.url}</span>
            <span className="text-gray-600 text-xs">{result.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
