import { useEffect } from 'react';
import { FC } from 'react';
import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isLink?: boolean;
  link?: string;
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  variant?: 'outline' | 'ghost';
}

const Button: FC<ButtonProps> = ({ as, children, className, ...props }) => {
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
      <button className={buttonClassName} {...props}>
        {children}
      </button>
    );
  }
};

export default Button;
