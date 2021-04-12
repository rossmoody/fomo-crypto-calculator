import React from "react"
import ThemeContainer from "../theme/theme-provider"
import { Helmet } from "react-helmet"
import { HomePage } from "../components"
import image from "../images/og-image.png"

const IndexPage = () => {
  return (
    <ThemeContainer>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>FOMO Crypto Calculator</title>
        <meta
          name="description"
          content="Determine exactly how much regret you should feel for not buying cryptocurrency sooner."
        />
        <meta property="og:title" content="FOMO Crypto Calculator" />
        <meta property="og:image" content={image} />
        <meta
          property="og:description"
          content="Determine exactly how much regret you should feel for not buying cryptocurrency sooner."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@_rossmoody" />
        <meta property="twitter:image" content={image} />
        <meta
          property="twitter:description"
          content="Determine exactly how much regret you should feel for not buying cryptocurrency sooner."
        />
        <link rel="canonical" href="http://fomocryptocalculator.com" />
      </Helmet>
      <HomePage />
    </ThemeContainer>
  )
}

export default IndexPage
