import Head from 'next/head'
import homeStyles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={homeStyles.main}>
      <Head>
        <title>Ryan Spears - Home</title>
        <meta name={'Liquid Creative Website'}></meta>
      </Head>
      <h1>It seems you{"\'"}ve stumbled upon my portfolio...</h1>
      <h2>My name is Ryan Spears, and I{"\'"}m a Software Developer from Jackson, MS.</h2>
      <h3>Feel free to look around to find out more about my work.</h3>
    </div>
  )
}
