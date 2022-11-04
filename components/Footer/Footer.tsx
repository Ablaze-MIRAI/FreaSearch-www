import FooterItem from './FooterItem';

const Footer: React.FC = () => {
  return (
    <footer className="absolute flex space-x-8 w-full bottom-0 bg-gray-100 text-sm py-6 px-16">
      <FooterItem label="Frea Searchについて" link="#" />
      <FooterItem label="寄付" link="#" />
      <FooterItem label="プライバシーポリシー" link="#" />
      <div className="flex-auto flex justify-end">© 2022 Frea Search, Ablaze</div>
    </footer>
  );
};

export default Footer;
