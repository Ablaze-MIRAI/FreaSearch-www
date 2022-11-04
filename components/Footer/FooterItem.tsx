import Link from 'next/link';

type props = {
  label: string;
  link: string;
};

const FooterItem: React.FC<props> = ({ label, link }) => {
  return (
    <Link href={link}>
      <div>{label}</div>
    </Link>
  );
};

export default FooterItem;
