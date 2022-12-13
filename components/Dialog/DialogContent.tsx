'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { IconX } from '@tabler/icons';
import classNames from 'classnames';
import IconButton from 'components/IconButton';
import { FC } from 'react';

interface Props extends DialogPrimitive.DialogPortalProps {
  title: string;
  className?: string;
}

const DialogContent: FC<Props> = ({ title, className, children, ...props }) => {
  return (
    <DialogPrimitive.Portal {...props}>
      <DialogPrimitive.Overlay className="absolute inset-0 backdrop-blur-sm" />
      <DialogPrimitive.Content
        className={classNames(
          'bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6',
          'rounded-lg shadow-md',
          className
        )}
      >
        <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
        <DialogPrimitive.Close asChild>
          <IconButton className="">
            <IconX size={20} />
          </IconButton>
        </DialogPrimitive.Close>
        <DialogPrimitive.Description>{children}</DialogPrimitive.Description>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

export default DialogContent;
