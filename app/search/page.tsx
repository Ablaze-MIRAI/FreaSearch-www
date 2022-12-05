import { Suspense } from 'react';
import SearchHeader from './SearchHeader';
import SearchResults from './SearchResults';

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string; type: string };
}) {
  const { q, type = 'all' } = searchParams;

  return (
    <div>
      <SearchHeader searchParams={new URLSearchParams(searchParams)} />
      <div className="px-28">
        <Suspense>
          <SearchResults searchParams={new URLSearchParams(searchParams)} />
        </Suspense>
      </div>
    </div>
  );
}
