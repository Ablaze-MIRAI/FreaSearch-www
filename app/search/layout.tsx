'use client';

import Footer from 'components/Footer';
import { useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';
import SearchHeader from './SearchHeader';

export default function SearchLayout({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();

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
