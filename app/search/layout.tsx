'use client';

import Footer from 'components/Footer';
import { useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';
import SearchHeader from './SearchHeader';

export default function SearchLayout({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();

  return (
    <div className="flex flex-col min-h-screen">
      <SearchHeader searchParams={searchParams} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
