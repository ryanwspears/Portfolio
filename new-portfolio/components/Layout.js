import React from 'react'
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({children}) => {
  return (
		<>
			<Header />
			<Nav />
			<div className={styles.container}>
				<Head>
					<meta content='width=device-width, initial-scale=1' name='viewport' />
				</Head>
				<main className={styles.main}>{children}</main>
			</div>
			<Footer />
		</>
	)
}

export default Layout