'use client';

import * as Select from '@radix-ui/react-select';
import { IconChevronDown } from '@tabler/icons';
import { ReactNode, useState } from 'react';

export default ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState('en');
  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger className="flex justify-between w-32 items-center border rounded-md text-left px-3 py-1.5">
        <span>{value}</span>
        <IconChevronDown size={16} />
      </Select.Trigger>
      <Select.Content>{children}</Select.Content>
    </Select.Root>
  );
};
