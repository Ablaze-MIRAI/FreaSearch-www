'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import { IconChevronDown } from '@tabler/icons';
import { FC } from 'react';

const Select: FC<SelectPrimitive.SelectProps> = ({ children, ...props }) => {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className="flex justify-between w-32 items-center rounded-md border text-left text-sm px-3 py-2 outline-none focus:ring">
        <SelectPrimitive.Value />
        <IconChevronDown size={16} />
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className="bg-white shadow-md p-2 rounded-md">
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};

export default Select;
