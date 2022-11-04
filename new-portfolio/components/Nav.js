import React from 'react'
import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
                <Link href='/'>home</Link>
            </li>
            <li>
                <Link href='/projects'>projects</Link>
            </li>
            <li>
                <Link href='https://docs.google.com/document/d/1h_PLlEQR9qCeGniRQiZGZ5Sj_pZ2itsrMT1GGhH_qtc/edit?usp=sharing'><a target={"_blank"}>resume</a></Link>
            </li>
            <li>
                <Link href='/contact'>contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav