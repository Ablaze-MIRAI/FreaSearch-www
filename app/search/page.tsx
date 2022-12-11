import { Suspense } from 'react';
import SearchResults from './SearchResults';
import Loader from 'components/Loader';

export default function SearchPage({ searchParams }: { searchParams: any }) {
  return (
    <div className="px-28">
      <Suspense
        fallback={
          <div className="flex justify-start mt-5">
            <Loader className="mx-3" />
            読み込み中...
          </div>
        }
      >
        <SearchResults searchParams={new URLSearchParams(searchParams)} />
      </Suspense>
    </div>
  );
}
