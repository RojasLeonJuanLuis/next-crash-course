import React from 'react'
import Fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'

import Prices from '../components/prices'

const Home = (props) => {
  return (
    <Layout>
      <div>
        <h1>Welcome to BitzPrice</h1>
        <p>Check current Bitcoin price</p>
        <Prices bpi={props.bpi} />
      </div>
    </Layout>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  const data = await res.json()

  return {
    bpi: data
  }
}

export default Home
