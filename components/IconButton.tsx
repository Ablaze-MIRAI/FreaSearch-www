import React from 'react';
import classNames from 'classnames';

type prop = {
  children: React.ReactNode;
  className?: string;
};

const IconButton: React.FC<prop> = ({ children, className, ...props }) => {
  return (
    <button
      className={classNames(
        'flex justify-center items-center w-12 h-12 font-bold p-2 rounded-md hover:bg-gray-100/50 transition',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
