import type { NextPage } from 'next';
import Head from 'next/head';
import Logo from 'components/Logo';
import Input from 'components/Input';
import Footer from 'components/Footer';
import { IconSearch } from '@tabler/icons';

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
      <main className="max-w-3xl mx-auto">
        <div className="mt-48">
          <Logo />
        </div>
        <Input rightItem={<IconSearch />} className="mt-12 outline-none transition" />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
