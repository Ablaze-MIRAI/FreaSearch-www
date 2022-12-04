import React, { forwardRef } from 'react';
import classNames from 'classnames';
import Button, { ButtonProps } from './Button';

export interface IconButtonProps extends ButtonProps {}

const IconButton: React.FC<ButtonProps> = forwardRef(({ children, className, ...props }) => {
  return (
    <Button variant="ghost" className={classNames('!px-2 w-11', className)} {...props}>
      {children}
    </Button>
  );
});

export default IconButton;
