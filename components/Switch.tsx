'use client';

import { FC } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import classNames from 'classnames';

export interface SwitchProps extends SwitchPrimitive.SwitchProps {
  className?: string;
}

const Switch: FC<SwitchProps> = ({ className, ...props }) => {
  return (
    <SwitchPrimitive.Root
      className={classNames(
        'group w-12 block h-6 p-0.5 rounded-full border-2 bg-gray-400 border-gray-300 transition',
        'data-[state=checked]:bg-green-400 data-[state=checked]:border-green-300',
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={classNames(
          'block w-5 h-full bg-white shadow-sm rounded-full',
          'group-data-[state=checked]:translate-x-full transition'
        )}
      />
    </SwitchPrimitive.Root>
  );
};

export default Switch;
