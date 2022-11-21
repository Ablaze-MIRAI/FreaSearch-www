'use client';

import * as Select from '@radix-ui/react-select';
import { IconChevronDown } from '@tabler/icons';
import { ReactNode, useState } from 'react';

export default ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState('en');
  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger className="flex justify-between w-32 items-center rounded-md border text-left text-sm px-3 py-2 outline-none focus:ring">
        <Select.Value />
        <IconChevronDown size={16} />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="bg-white drop-shadow-md p-2 rounded-md">
          <Select.Viewport>{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
