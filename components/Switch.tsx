'use client';

import { FC } from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
import classNames from 'classnames';

type Props = {
  value?: false;
};

const Switch: FC<Props> = ({ value }) => {
  return (
    <RadixSwitch.Root
      className={classNames(
        'w-12 block h-6 p-0.5 rounded-full border-2',
        value ? 'bg-green-400 border-green-300' : 'bg-gray-400 border-gray-300'
      )}
    >
      <RadixSwitch.Thumb className="block w-5 h-full bg-white drop-shadow-sm rounded-full" />
    </RadixSwitch.Root>
  );
};

export default Switch;
