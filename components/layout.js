import React from 'react'
import NavBar from './nav-bar'
import Head from 'next/head'

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>BitzPrice</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.css" />
      </Head>
      <NavBar />
      {props.children}
    </div>
  )
}
export default Layout
