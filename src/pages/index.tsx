import React from 'react'
import {
  CoinList,
  Layout,
  Footer,
  Graveyard,
  Header,
  Hero
} from '../components'

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <CoinList />
      <Graveyard />
      <Footer />
    </Layout>
  )
}

export default IndexPage
