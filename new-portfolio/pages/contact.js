import React from 'react'
import Head from 'next/head'
import contactStyles from '../styles/Contact.module.css'

const contact = () => {
  return (
    <div className={contactStyles.box}>
        <Head>
            <title>Ryan Spears - Contact</title>
        </Head>
        <h2>Need to get in touch with me?</h2>
        <h3>Fill out the form below, and I'll get back with you.</h3>
        <form className={contactStyles.form} action={'https://formspree.io/f/mlezzjqe'} method={'POST'}>
          <input type='text' name='name' placeholder='Name' />
          <input type='email' name='email' placeholder='Email' />
          <input type='tel' name='phone' placeholder='Phone Number' />
          <textarea name='message' placeholder='Message' />
          <button type='submit'>Send</button>
        </form>
    </div>
  )
}

export default contact