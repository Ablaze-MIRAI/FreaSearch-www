'use client';

import * as Select from '@radix-ui/react-select';
import { IconCheck } from '@tabler/icons';
import { ReactNode } from 'react';

export default ({ value, children }: { value: string; children: ReactNode }) => {
  return (
    <Select.Item value={value}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute">
        <IconCheck size={16} />
      </Select.ItemIndicator>
    </Select.Item>
  );
};
