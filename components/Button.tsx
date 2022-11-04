import React from 'react';
import classNames from 'classnames';

type props = {
  isLink?: boolean;
  link?: string;
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<props> = ({ children, className, ...props }) => {
  return (
    <button
      className={classNames(
        'flex items-center justify-center border border-[#C41B1B] hover:bg-gray-100/70 h-12 px-4 rounded-md transition',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
