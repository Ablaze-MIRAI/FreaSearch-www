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
  return <div>検索結果: {data.results.length}件</div>;
};

export default SearchResults;
