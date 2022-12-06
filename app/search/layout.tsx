import Footer from 'components/Footer';
import { ReactNode } from 'react';
import SearchHeader from './SearchHeader';

export default function SearchLayout({
  children,
  searchParams,
}: {
  children: ReactNode;
  searchParams: { q: string; type: string };
}) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <SearchHeader searchParams={new URLSearchParams(searchParams)} />
      </div>
      {children}
      <Footer />
    </div>
  );
}
