import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sean O&apos;Neill - Portfolio</title>
        <meta
          name="Sean O'Neill - Portfolio"
          content="Sean O'Neill - Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Sean O&apos;Neill</h1>
        <h2 className={styles.description}>Welcome to my portfolio</h2>
        <p className={styles.description}>In progress...</p>
      </main>
    </div>
  );
}
