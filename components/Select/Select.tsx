'use client';

import * as RadixSelect from '@radix-ui/react-select';
import { IconChevronDown } from '@tabler/icons';
import { FC } from 'react';

const Select: FC<RadixSelect.SelectProps> = ({ children, ...props }) => {
  return (
    <RadixSelect.Root {...props}>
      <RadixSelect.Trigger className="flex justify-between w-32 items-center rounded-md border text-left text-sm px-3 py-2 outline-none focus:ring">
        <RadixSelect.Value />
        <IconChevronDown size={16} />
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className="bg-white shadow-md p-2 rounded-md">
          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

export default Select;
