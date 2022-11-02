import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styles from './Input.module.css';

type Props = JSX.IntrinsicElements['input'] & {
  rightItem: ReactNode;
  className?: string;
};

const Input: React.FC<Props> = ({ rightItem, className, ...props }) => {
  return (
    <div>
      <input type="text" className={classNames(styles.input, className)} {...props} />
    </div>
  );
};

export default Input;
