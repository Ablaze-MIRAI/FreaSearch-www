import classNames from 'classnames';
import React, { ReactNode } from 'react';

type Props = JSX.IntrinsicElements['input'] & {
  leftItem: ReactNode;
  className?: string;
};

const Input: React.FC<Props> = ({ leftItem: leftItem, className, ...props }) => {
  return (
    <div className={classNames('relative', className)}>
      <input
        type="text"
        className={classNames(
          'border-none outline-none bg-gray-100 h-12 px-5 text-lg rounded-full w-full',
          leftItem && 'pl-14'
        )}
        {...props}
      />
      {leftItem && (
        <div className="absolute left-5 text-gray-400 top-0 h-full flex items-center">
          {leftItem}
        </div>
      )}
    </div>
  );
};

export default Input;
