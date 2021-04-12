import React from 'react'
import GlobalStyle from './global-style'
import { ThemeProvider } from 'styled-components'
import { FadeIn } from '../components'
import { Helmet } from 'react-helmet'
import defaultTheme from './default-theme'

const meta = {
  title: 'Fomo Crypto Calculator',
  description:
    'Determine the dollar amount of regret you should feel for not investing in cryptocurrency sooner.',
  url: 'https://fomocryptocalculator.com',
  author: '@_rossmoody'
}

const Layout = props => {
  return (
    <ThemeProvider theme={defaultTheme}>
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
      </Helmet>
      <GlobalStyle />
      <FadeIn>{props.children}</FadeIn>
    </ThemeProvider>
  )
}

export default Layout
