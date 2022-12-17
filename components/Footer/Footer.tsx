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
        'flex space-x-8 w-full text-sm py-6 px-16 shadow-[0_-4px_3px_rgb(0_0_0_/_0.07)]',
        'dark:shadow-none dark:border-t-2 dark:border-neutral-800',
        className
      )}
    >
      <FooterItem label="ソースコード" link="https://github.com/Ablaze-MIRAI/FreaSearch-www" />
      <FooterItem label="寄付" link="https://donate.freasearch.org/" />
      <FooterItem label="プライバシーポリシー" link="https://nexryai.online/docs/privacy/" />
      <div className="flex-auto flex justify-end">© 2022 Frea Search, Ablaze</div>
    </footer>
  );
};

export default Footer;
