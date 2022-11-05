import React from 'react';
import classNames from 'classnames';
import Button from './Button';

type prop = React.ComponentProps<typeof Button>;

const IconButton: React.FC<prop> = ({ children, className, ...props }) => {
  return (
    <Button className={classNames('!px-2 w-11 border-none', className)} {...props}>
      {children}
    </Button>
  );
};

export default IconButton;
