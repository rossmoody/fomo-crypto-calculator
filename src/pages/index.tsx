import React from 'react'
import { Helmet } from 'react-helmet'

import {
  CoinList,
  Layout,
  Footer,
  Graveyard,
  Header,
  Hero,
} from '../components'

const meta = {
  title: 'Fomo Crypto Calculator',
  description:
    'Determine the dollar amount of regret you should feel for not investing in cryptocurrency sooner.',
  url: 'https://fomocryptocalculator.com',
  author: '@_rossmoody',
}

const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <link rel="canonical" href={meta.url} />
        <title>{meta.title}</title>
        <meta property="og:title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta property="og:image" content={`${meta.url}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.author} />
        <meta name="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={`${meta.url}/og-image.png`} />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
      </Helmet>
      <Header />
      <Hero />
      <CoinList />
      <Graveyard />
      <Footer />
    </Layout>
  )
}

export default IndexPage
