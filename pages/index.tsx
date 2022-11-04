import type { NextPage } from 'next';
import Head from 'next/head';
import Logo from 'components/Logo';
import Input from 'components/Input';
import { IconSearch } from '@tabler/icons';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Frea Search</title>
        <meta
          name="description"
          content="Frea Search — a clean, privacy-respecting metasearch engine"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mt-64">
          <Logo />
        </div>
        <Input rightItem={<IconSearch />} className="mt-24 outline-none transition" />
      </main>
    </div>
  );
};

export default Home;
