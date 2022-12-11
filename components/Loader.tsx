import { IconLoader2, TablerIconProps } from '@tabler/icons';
import classNames from 'classnames';
import { FC } from 'react';

interface Props extends TablerIconProps {}

const Loader: FC<Props> = ({ className, ...props }) => {
  return <IconLoader2 {...props} className={classNames(className, 'animate-spin text-brand')} />;
};

export default Loader;
