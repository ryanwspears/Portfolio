import React from 'react'
import Head from 'next/head'
import contactStyles from '../styles/Contact.module.css'
import Image from 'next/image'

const contact = () => {
  return (
    <div className={contactStyles.box}>
        <Head>
            <title>Ryan Spears - Contact</title>
        </Head>
        <h2>Need to get in touch with me?</h2>
        <h3>Fill out the form below, and I{"\'"}ll get back with you.</h3>
        <form className={contactStyles.form} action={'https://formspree.io/f/mlezzjqe'} method={'POST'}>
          <input type={'text'} name={'name'} placeholder={'Name'} />
          <input type={'email'} name={'email'} placeholder={'Email'} />
          <input type={'tel'} name={'phone'} placeholder={'Phone Number'} />
          <textarea name={'message'} placeholder={'Message'} />
          <button type={'submit'}>Send</button>
        </form>
        <h3>You can also find me on social media and github</h3>
        <div className={contactStyles.box2}>
          <div className={contactStyles.social}>
            <a href={'https://www.instagram.com/_ryan_wesley_/?hl=en'} target={'_blank'} rel={"noreferrer"}>
              <Image src={'/instagram.gif'} alt={'instagram'} width={'50'} height={'50'}></Image>
            </a>
          </div>
          <div className={contactStyles.social}>
            <a href={'https://www.facebook.com/ryan.spears.777701/'} target={'_blank'} rel={"noreferrer"}>
              <Image src={'/facebook.gif'} alt={'facebook'} width={'50'} height={'50'}></Image>
            </a>
          </div>
          <div className={contactStyles.social}>
            <a href={'https://twitter.com/Ryan_W_Spears'} target={'_blank'} rel={"noreferrer"}>
              <Image src={'/twitter.gif'} alt={'twitter'} width={'50'} height={'50'}></Image>
            </a>
          </div>
          <div className={contactStyles.social}>
            <a href={'https://www.linkedin.com/in/ryan-spears-dev/'} target={'_blank'} rel={"noreferrer"}>
              <Image src={'/linkedin.gif'} alt={'linkedin'} width={'50'} height={'50'}></Image>
            </a>
          </div>
          <div className={contactStyles.social}>
            <a href={'https://github.com/ryanwspears'} target={'_blank'} rel={"noreferrer"}>
              <Image src={'/github.gif'} alt={'github'} width={'50'} height={'50'}></Image>
            </a>
          </div>
        </div>
    </div>
  )
}

export default contact