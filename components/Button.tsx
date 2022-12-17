import { forwardRef, useEffect } from 'react';
import { FC } from 'react';
import classNames from 'classnames';
import { TablerIcon } from '@tabler/icons';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  link?: string;
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  variant?: 'outline' | 'ghost';
  leftIcon?: TablerIcon;
  rightIcon?: TablerIcon;
  ref?: any;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ leftIcon, rightIcon, as, children, className, ...props }: ButtonProps, ref) => {
    const CustomElement = ({ ...props }) => {
      const Tag = as as keyof JSX.IntrinsicElements;
      return <Tag {...props} />;
    };

    const ChildrenWithIcons = () => {
      const LeftIconComponent = leftIcon;
      const RightIconComponent = rightIcon;

      return (
        <>
          {LeftIconComponent && <LeftIconComponent size={16} className="mr-1" />}
          {children}
          {RightIconComponent && <RightIconComponent size={16} className="ml-1" />}
        </>
      );
    };

    const buttonClassName = classNames(
      'flex items-center justify-center border border-brand hover:bg-gray-200/50 dark:hover:bg-neutral-700/50 h-11 px-5 rounded-md transition cursor-pointer',
      { 'border-none': props.variant === 'ghost' },
      className
    );

    if (as) {
      return (
        <CustomElement className={buttonClassName} {...props}>
          <ChildrenWithIcons />
        </CustomElement>
      );
    } else {
      return (
        <button className={buttonClassName} ref={ref} {...props}>
          <ChildrenWithIcons />
        </button>
      );
    }
  }
);

export default Button;
