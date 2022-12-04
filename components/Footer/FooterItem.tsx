import Link from 'next/link';

export interface FooterItemProps {
  label: string;
  link: string;
}

const FooterItem: React.FC<FooterItemProps> = ({ label, link }) => {
  return (
    <Link href={link}>
      <div>{label}</div>
    </Link>
  );
};

export default FooterItem;
