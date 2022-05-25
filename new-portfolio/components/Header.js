import React from 'react'
import headerStyles from '../styles/Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <div className={headerStyles.box}>
        <Link href='/'><h1 className={headerStyles.mainText}>ryan spears</h1></Link>
        <h2 className={headerStyles.subText}>software developer</h2>
    </div>
  )
}

export default Header