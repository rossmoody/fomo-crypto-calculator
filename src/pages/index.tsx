import React from "react"
import ThemeContainer from "../theme/theme-provider"
import { Helmet } from "react-helmet"
import { HomePage } from "../components"

const IndexPage = () => {
  return (
    <ThemeContainer>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="http://fomocryptocalculator.com" />
        <title>FOMO Crypto Calculator</title>
        <meta property="og:title" content="FOMO Crypto Calculator" />
        <meta
          name="description"
          content="Determine exactly how much regret you should feel for not buying cryptocurrency sooner."
        />
        <meta
          property="og:image"
          content="https://fomocryptocalculator.com/og-image.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@_rossmoody" />
        <meta
          property="twitter:description"
          content="Determine exactly how much regret you should feel for not buying cryptocurrency sooner."
        />
        <meta
          property="twitter:image"
          content="https://fomocryptocalculator.com/og-image.png"
        />
      </Helmet>
      <HomePage />
    </ThemeContainer>
  )
}

export default IndexPage
