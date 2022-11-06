import type { NextPage } from 'next';
import Logo from 'components/Logo';
import Button from 'components/Button';
import IconButton from 'components/IconButton';
import Input from 'components/Input';
import Footer from 'components/Footer';
import { IconSearch, IconSettings } from '@tabler/icons';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <main className="max-w-2xl mx-auto">
        <div className="absolute top-5 right-7 flex">
          <Button link="#">ダウンロード</Button>
          <IconButton link="/settings" className="ml-5">
            <IconSettings />
          </IconButton>
        </div>
        <div className="mt-48 flex justify-center">
          <Logo />
        </div>
        <Input
          placeholder="検索する..."
          leftItem={<IconSearch />}
          className="mt-12 outline-none transition"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
