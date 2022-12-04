import type { NextPage } from 'next';
import Logo from 'components/Logo';
import Button from 'components/Button';
import IconButton from 'components/IconButton';
import SearchInput from 'components/SearchInput';
import Footer from 'components/Footer';
import { IconSettings } from '@tabler/icons';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <main className="max-w-2xl mx-auto">
        <div className="absolute top-5 right-7 flex">
          <Link href="#" legacyBehavior>
            <Button as="a">ダウンロード</Button>
          </Link>
          <Link href="/settings" legacyBehavior>
            <IconButton as="a" className="ml-5">
              <IconSettings />
            </IconButton>
          </Link>
        </div>
        <div className="mt-48 flex justify-center">
          <Logo />
        </div>
        <SearchInput className="mt-12" />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
