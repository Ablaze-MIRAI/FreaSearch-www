import type { NextPage } from 'next';
import Head from 'next/head';
import Logo from 'components/Logo';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frea Search</title>
        <meta
          name="description"
          content="Frea Search — a clean, privacy-respecting metasearch engine"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.iconWrapper}>
          <Logo />
        </div>
      </main>
    </div>
  );
};

export default Home;
