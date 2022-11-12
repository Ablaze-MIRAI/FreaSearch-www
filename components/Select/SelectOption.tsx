'use client';

import * as Select from '@radix-ui/react-select';
import { ReactNode } from 'react';

export default ({ key, children }: { key: string; children: ReactNode }) => {
  return <Select.Item value={key}>{children}</Select.Item>;
};
