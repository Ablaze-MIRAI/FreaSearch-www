'use client';

import * as Select from '@radix-ui/react-select';
import { IconCheck } from '@tabler/icons';
import { ReactNode } from 'react';

export default ({ value, children }: { value: string; children: ReactNode }) => {
  return (
    <Select.Item
      value={value}
      className="outline-none text-sm p-6 py-1 data-[highlighted]:bg-gray-100 rounded-sm cursor-pointer"
    >
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
};
