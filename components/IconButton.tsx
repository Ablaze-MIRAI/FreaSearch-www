import React from 'react';
import classNames from 'classnames';
import Button from './Button';

type prop = {
  isLink?: boolean;
  link?: string;
  children: React.ReactNode;
  className?: string;
};

const IconButton: React.FC<prop> = ({ children, className, ...props }) => {
  return <Button className={classNames('px-2 w-12 border-none', className)}>{children}</Button>;
};

export default IconButton;
