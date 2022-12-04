import { useEffect } from 'react';
import React from 'react';
import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isLink?: boolean;
  link?: string;
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  variant?: 'outline' | 'ghost';
}

const ButtonElement: React.FC<ButtonProps> = ({ link, children, ...props }) => {
  return link === undefined ? (
    <button {...props}>{children}</button>
  ) : (
    <Link href={link} {...props}>
      {children}
    </Link>
  );
};

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <ButtonElement
      className={classNames(
        'flex items-center justify-center border border-brand hover:bg-gray-200/50 h-11 px-5 rounded-md transition',
        { 'border-none': props.variant === 'ghost' },
        className
      )}
      {...props}
    >
      {children}
    </ButtonElement>
  );
};

export default Button;
