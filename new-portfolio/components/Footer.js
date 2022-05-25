import React from 'react'
import footerStyles from '../styles/Footer.module.css'

function getYear() {
    return new Date().getFullYear();
}

const Footer = () => {
  return (
    <div className={footerStyles.box}>
        <h5>ryan spears | &copy; {getYear()}</h5>
    </div>
  )
}

export default Footer