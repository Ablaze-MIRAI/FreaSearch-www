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
          'bg-white dark:bg-neutral-900 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10',
          'rounded-lg shadow-md',
          className
        )}
      >
        <DialogPrimitive.Title className="font-bold pb-2 whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </DialogPrimitive.Title>
        <DialogPrimitive.Close asChild>
          <IconButton className="absolute top-2 right-2">
            <IconX size={20} />
          </IconButton>
        </DialogPrimitive.Close>
        <DialogPrimitive.Description>{children}</DialogPrimitive.Description>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

export default DialogContent;
