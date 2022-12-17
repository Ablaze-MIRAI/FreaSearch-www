'use client';

import * as Select from '@radix-ui/react-select';
import { IconCheck } from '@tabler/icons';
import classNames from 'classnames';
import { ReactNode } from 'react';

export default ({ value, children }: { value: string; children: ReactNode }) => {
  return (
    <Select.Item
      value={value}
      className={classNames(
        'outline-none text-sm p-6 py-1 data-[highlighted]:bg-gray-100 rounded-sm cursor-pointer',
        'dark:data-[highlighted]:bg-neutral-700'
      )}
    >
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
};
