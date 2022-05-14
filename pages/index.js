import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Bro</title>
        <meta name="nextbro" content="nextjs,reactjs,expressjs,mongo,nodejs,bugs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.navigation}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
        <h1 className={styles.title}>
          Welcome to <a href="#">Next Bro</a>
        </h1>

        <p className={styles.description}>
          Here you will find different blogs related to tech
        </p>
        <div className="blogs">
          <h2>
            Popular Blogs
          </h2>
          <div className="blogItem">
            <h2>How to learn javascript 2020</h2>
            <p>
              js is a popular scripting language in 2020
            </p>
          </div>
          <div className="blogItem">
            <h2>How to learn javascript 2020</h2>
            <p>
              js is a popular scripting language in 2020
            </p>
          </div>
        </div>

      </main>

    </div>
  )
}
