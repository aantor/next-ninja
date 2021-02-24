import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
    <Head>
      <title>Ninja List | Home</title>
    </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
        reprehenderit quae aut aspernatur hic earum maiores ipsam asperiores
        repudiandae debitis, doloribus illum culpa dolores temporibus laboriosam
        tenetur eum amet id?
      </p>
      <Link href='/ninjas'>
        <a className={styles.btn}>See ninja listing</a>
      </Link>
    </div>
  );
}
