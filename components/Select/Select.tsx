'use client';

import * as RadixSelect from '@radix-ui/react-select';
import { IconChevronDown } from '@tabler/icons';
import { FC, useState } from 'react';

const Select: FC<RadixSelect.SelectProps> = ({ children, value, onValueChange, ...props }) => {
  const [selected, setSelected] = useState<RadixSelect.SelectItemProps['value']>(value!);

  return (
    <RadixSelect.Root
      value={selected}
      onValueChange={(value) => {
        setSelected(value);
      }}
      {...props}
    >
      <RadixSelect.Trigger className="flex justify-between w-32 items-center rounded-md border text-left text-sm px-3 py-2 outline-none focus:ring">
        <RadixSelect.Value />
        <IconChevronDown size={16} />
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className="bg-white drop-shadow-md p-2 rounded-md">
          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

export default Select;
