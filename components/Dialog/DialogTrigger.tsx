'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const DialogTrigger: FC<Props> = ({ children }) => {
  return <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>;
};

export default DialogTrigger;
