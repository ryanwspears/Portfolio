import React from 'react'
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
        <Header />
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        <Footer />
    </>
  )
}

export default Layout