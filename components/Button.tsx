import { useEffect } from 'react';
import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

type props = {
  isLink?: boolean;
  link?: string;
  children: React.ReactNode;
  className?: string;
};

const ButtonElement: React.FC<props> = ({ link, children, ...props }) => {
  return link === undefined ? (
    <button {...props}>{children}</button>
  ) : (
    <Link href={link} {...props}>
      {children}
    </Link>
  );
};

const Button: React.FC<props> = ({ children, className, ...props }) => {
  return (
    <ButtonElement
      className={classNames(
        'flex items-center justify-center border border-[#C41B1B] hover:bg-gray-100/70 h-11 px-5 rounded-lg transition',
        className
      )}
      {...props}
    >
      {children}
    </ButtonElement>
  );
};

export default Button;
