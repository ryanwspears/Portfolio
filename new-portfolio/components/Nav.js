import React from 'react'
import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
                <Link href='/about'>about</Link>
            </li>
            <li>
                <Link href='/projects'>projects</Link>
            </li>
            <li>
                <Link href='/resume'>resume</Link>
            </li>
            <li>
                <Link href='/contact'>contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav