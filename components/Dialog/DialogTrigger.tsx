'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { FC } from 'react';

interface Props extends DialogPrimitive.DialogTriggerProps {}

const DialogTrigger: FC<Props> = ({ children, ...props }) => {
  return <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>;
};

export default DialogTrigger;
