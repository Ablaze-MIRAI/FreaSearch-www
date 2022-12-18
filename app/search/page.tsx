import { Suspense } from 'react';
import SearchResults from './SearchResults';
import Loader from 'components/Loader';

export default function SearchPage({ searchParams }: { searchParams: any }) {
  return (
    <Suspense
      fallback={
        <div className="flex justify-start mt-5 mx-2 md:mx-28">
          <Loader className="mx-3" />
          読み込み中...
        </div>
      }
    >
      <SearchResults searchParams={new URLSearchParams(searchParams)} />
    </Suspense>
  );
}
