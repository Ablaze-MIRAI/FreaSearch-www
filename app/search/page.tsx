import { Suspense } from 'react';
import SearchResults from './SearchResults';

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string; type: string };
}) {
  const { q, type = 'all' } = searchParams;

  return (
    <div className="px-28">
      <Suspense>
        <SearchResults searchParams={new URLSearchParams(searchParams)} />
      </Suspense>
    </div>
  );
}
