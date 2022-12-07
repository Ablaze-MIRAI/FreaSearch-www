import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

export interface TabItemProps {
  href: string;
  isSelected: boolean;
  children: React.ReactNode;
  className: string;
}

const TabItem: React.FC<TabItemProps> = ({ href, isSelected, className, children }) => {
  return (
    <Link
      href={href}
      className={classNames(
        'py-2 px-3',
        {
          'shadow-[0_2px_0_0] shadow-brand': isSelected,
        },
        className
      )}
    >
      {children}
    </Link>
  );
};

export default TabItem;
