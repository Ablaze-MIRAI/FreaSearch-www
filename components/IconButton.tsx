import { FC, forwardRef } from 'react';
import classNames from 'classnames';
import Button, { ButtonProps } from './Button';

export interface IconButtonProps extends ButtonProps {}

const IconButton: FC<IconButtonProps> = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Button variant="ghost" className={classNames('!px-2 w-11', className)} ref={ref} {...props}>
        {children}
      </Button>
    );
  }
);

export default IconButton;
