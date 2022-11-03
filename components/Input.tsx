import classNames from 'classnames';
import React, { ReactNode } from 'react';

type Props = JSX.IntrinsicElements['input'] & {
  rightItem: ReactNode;
  className?: string;
};

const Input: React.FC<Props> = ({ rightItem, className, ...props }) => {
  return (
    <div>
      <input type="text" className={classNames('border-none bg-gray-50', className)} {...props} />
    </div>
  );
};

export default Input;
