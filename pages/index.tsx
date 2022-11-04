import type { NextPage } from 'next';
import Head from 'next/head';
import Logo from 'components/Logo';
import Button from 'components/Button';
import IconButton from 'components/IconButton';
import Input from 'components/Input';
import Footer from 'components/Footer';
import { IconSearch, IconSettings } from '@tabler/icons';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Frea Search</title>
        <meta
          name="description"
          content="Frea Search — a clean, privacy-respecting metasearch engine"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-2xl mx-auto">
        <div className="absolute top-5 right-7 flex">
          <Button isLink link="#">
            ダウンロード
          </Button>
          <IconButton isLink link="#" className="ml-2">
            <IconSettings />
          </IconButton>
        </div>
        <div className="mt-48">
          <Logo />
        </div>
        <Input
          placeholder="検索する..."
          rightItem={<IconSearch />}
          className="mt-12 outline-none transition"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
