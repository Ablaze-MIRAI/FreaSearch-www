'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { FC } from 'react';

interface Props extends DialogPrimitive.DialogProps {}

const Dialog: FC<Props> = ({ children, ...props }) => {
  return <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>;
};

export default Dialog;
