import React from 'react';
import classNames from 'classnames';
import Button, { ButtonProps } from './Button';

export type IconButtonProps = ButtonProps;

const IconButton: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button variant="ghost" className={classNames('!px-2 w-11', className)} {...props}>
      {children}
    </Button>
  );
};

export default IconButton;
