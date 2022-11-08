import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

type props = {
  href: string;
  isSelected: boolean;
  children: React.ReactNode;
};

const TabItem: React.FC<props> = ({ href, isSelected, children }) => {
  return (
    <Link href={href}>
      <div
        className={classNames('py-2 px-3', {
          'shadow-[0_2px_0_0_#aaa] shadow-red-600': isSelected,
        })}
      >
        {children}
      </div>
    </Link>
  );
};

export default TabItem;
