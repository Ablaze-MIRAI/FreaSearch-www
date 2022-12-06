import { ReactNode } from 'react';
import SearchHeader from './SearchHeader';

export default function SearchLayout({
  children,
  searchParams,
}: {
  children: ReactNode;
  searchParams: { q: string; type: string };
}) {
  console.log(searchParams);
  return (
    <div className="bg-gray-100 min-h-screen">
      <SearchHeader searchParams={new URLSearchParams(searchParams)} />
      {children}
    </div>
  );
}
