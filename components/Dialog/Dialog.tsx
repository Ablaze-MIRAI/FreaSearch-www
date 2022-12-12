'use client';

import * as RadixDialog from '@radix-ui/react-dialog';
import { FC } from 'react';

interface Props extends RadixDialog.DialogProps {}

const Dialog: FC<Props> = ({ children, ...props }) => {
  return <RadixDialog.Root {...props}>{children}</RadixDialog.Root>;
};

export default Dialog;
