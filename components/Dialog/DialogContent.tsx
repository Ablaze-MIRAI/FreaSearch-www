'use client';

import * as RadixDialog from '@radix-ui/react-dialog';
import classNames from 'classnames';
import { FC } from 'react';

interface Props extends RadixDialog.DialogPortalProps {
  title: string;
}

const DialogContent: FC<Props> = ({ title, children, ...props }) => {
  return (
    <RadixDialog.Portal {...props}>
      <RadixDialog.Overlay className="absolute inset-0 backdrop-blur-sm" />
      <RadixDialog.Content
        className={classNames(
          'bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6',
          'rounded-lg shadow-md'
        )}
      >
        <RadixDialog.Close />
        <RadixDialog.Description>{children}</RadixDialog.Description>
        <RadixDialog.Title>{title}</RadixDialog.Title>
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
};

export default DialogContent;
