import classNames from 'classnames';
import React, { forwardRef, ReactNode } from 'react';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  leftItem?: ReactNode;
  rightItem?: ReactNode;
  className?: string;
  ref?: any;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ leftItem, rightItem, className, ...props }: InputProps, ref) => {
    return (
      <div className={classNames('relative rounded-full', className)}>
        <input
          type="text"
          className={classNames(
            'border-none outline-none bg-gray-100 h-12 px-5 rounded-full w-full',
            'dark:bg-neutral-800 dark:placeholder:text-neutral-500',
            leftItem && 'pl-14',
            rightItem && 'pr-14'
          )}
          ref={ref}
          {...props}
        />
        {leftItem && (
          <div className="absolute left-0 text-gray-400 dark:text-neutral-500 top-0 h-full flex items-center">
            {leftItem}
          </div>
        )}
        {rightItem && (
          <div className="absolute right-0 text-gray-400 dark:text-neutral-500 top-0 h-full flex items-center">
            {rightItem}
          </div>
        )}
      </div>
    );
  }
);

export default Input;
