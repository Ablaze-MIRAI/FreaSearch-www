import type { NextPage } from 'next';
import Head from 'next/head';
import Logo from 'components/Logo';
import Input from 'components/Input';

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
        <div>
          <Logo />
        </div>
        <Input rightItem />
      </main>
    </div>
  );
};

export default Home;
