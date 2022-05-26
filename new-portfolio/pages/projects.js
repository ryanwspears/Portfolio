import React from 'react'
import Head from 'next/head'
import projectStyles from '../styles/Project.module.css'

const projects = () => {
  return (
    <div>
        <Head>
            <title>Ryan Spears - Projects</title>
        </Head>
        <div className={projectStyles.main}>
          <div className={projectStyles.projectCard}>
            <h3>Project 1</h3>
          </div>
          <div className={projectStyles.projectCard}>
            <h3>Project 1</h3>
          </div>
          <div className={projectStyles.projectCard}>
            <h3>Project 1</h3>
          </div>
        </div>
    </div>
  )
}

export default projects