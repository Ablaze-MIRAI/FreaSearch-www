'use client';

import * as RadixDialog from '@radix-ui/react-dialog';
import { FC } from 'react';

interface Props extends RadixDialog.DialogTriggerProps {}

const DialogTrigger: FC<Props> = ({ children, ...props }) => {
  return <RadixDialog.Trigger asChild>{children}</RadixDialog.Trigger>;
};

export default DialogTrigger;
