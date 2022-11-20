'use client';

import * as Select from '@radix-ui/react-select';
import { IconCheck } from '@tabler/icons';
import { ReactNode } from 'react';

export default ({ value, children }: { value: string; children: ReactNode }) => {
  return (
    <Select.Item
      value={value}
      className="outline-none text-sm pl-6 pr-3 py-1.5 data-[highlighted]:bg-gray-100 cursor-pointer"
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-1 align-middle">
        <IconCheck size={16} />
      </Select.ItemIndicator>
    </Select.Item>
  );
};
