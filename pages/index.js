import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Top 10 Players</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          See My  <a href="/players">Top Five NBA Players</a>
        </h1>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
