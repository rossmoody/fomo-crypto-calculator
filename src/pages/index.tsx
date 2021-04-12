import React from "react"
import ThemeContainer from "../theme/theme-provider"
import { Helmet } from "react-helmet"
import HomePage from "./home"

const IndexPage = () => {
  return (
    <ThemeContainer>
      <Helmet>
        <html lang="en" />
        <title>FOMO Crypto Calculator</title>
        <meta charSet="utf-8" />
        <meta property="og:title" content="FOMO Crypto Calculator" />
        <meta
          name="description"
          content="Accurately quantify your crypto regret."
        />
        <meta
          property="og:description"
          content="Accurately quantify your crypto regret."
        />
        <meta
          property="og:image"
          content="https://fomocryptocalculator.com/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@_rossmoody" />
        <link rel="canonical" href="http://fomocryptocalculator.com" />
      </Helmet>
      <HomePage />
    </ThemeContainer>
  )
}

export default IndexPage
