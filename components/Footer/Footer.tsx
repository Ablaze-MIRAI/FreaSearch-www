import classNames from 'classnames';
import { FC } from 'react';
import FooterItem from './FooterItem';

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }) => {
  return (
    <footer
      className={classNames(
        'flex space-x-8 w-full text-sm bg-white py-6 px-16 shadow-[0_-4px_3px_rgb(0_0_0_/_0.07)]',
        className
      )}
    >
      <FooterItem label="Frea Searchについて" link="#" />
      <FooterItem label="寄付" link="#" />
      <FooterItem label="プライバシーポリシー" link="#" />
      <div className="flex-auto flex justify-end">© 2022 Frea Search, Ablaze</div>
    </footer>
  );
};

export default Footer;
