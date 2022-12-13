import { forwardRef, useEffect } from 'react';
import { FC } from 'react';
import classNames from 'classnames';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  link?: string;
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  variant?: 'outline' | 'ghost';
  ref?: any;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ as, children, className, ...props }: ButtonProps, ref) => {
    const CustomElement = ({ ...props }) => {
      const Tag = as as keyof JSX.IntrinsicElements;
      return <Tag {...props} />;
    };

    const buttonClassName = classNames(
      'flex items-center justify-center border border-brand hover:bg-gray-200/50 h-11 px-5 rounded-md transition',
      { 'border-none': props.variant === 'ghost' },
      className
    );

    if (as) {
      return (
        <CustomElement className={buttonClassName} {...props}>
          {children}
        </CustomElement>
      );
    } else {
      return (
        <button className={buttonClassName} ref={ref} {...props}>
          {children}
        </button>
      );
    }
  }
);

export default Button;
