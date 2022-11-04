import classNames from 'classnames';
import React, { ReactNode } from 'react';

type Props = JSX.IntrinsicElements['input'] & {
  rightItem: ReactNode;
  className?: string;
};

const Input: React.FC<Props> = ({ rightItem, className, ...props }) => {
  return (
    <div className={classNames('max-w-4xl mx-auto relative', className)}>
      <input
        type="text"
        className="border-none outline-none bg-gray-100 h-16 px-5 text-lg rounded-lg w-full"
        {...props}
      />
      {rightItem && (
        <div className="absolute right-5 text-gray-400 top-0 h-full flex items-center">
          {rightItem}
        </div>
      )}
    </div>
  );
};

export default Input;
