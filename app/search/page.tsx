import { Suspense } from 'react';
import SearchResults from './SearchResults';

export default function SearchPage({ searchParams }: { searchParams: any }) {
  return (
    <div className="px-28">
      <Suspense>
        <SearchResults searchParams={new URLSearchParams(searchParams)} />
      </Suspense>
    </div>
  );
}
