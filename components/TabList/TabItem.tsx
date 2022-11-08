import React from 'react';
import Link from 'next/link';

type props = {
  href: string;
  children: React.ReactNode;
};

const TabItem: React.FC<props> = ({ href, children }) => {
  return (
    <Link href={href}>
      <div className="px-3">{children}</div>
    </Link>
  );
};

export default TabItem;
