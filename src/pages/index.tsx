import React from "react"
import ThemeContainer from "../theme/theme-provider"
import { Helmet } from "react-helmet"
import { HomePage } from "../components"

const meta = {
  title: "Fomo Crypto Calculator",
  description:
    "Determine exactly how much regret you should feel for not buying cryptocurrency sooner.",
  url: "http://fomocryptocalculator.com",
  author: "@_rossmoody"
}

const IndexPage = () => {
  return (
    <ThemeContainer>
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
      <HomePage />
    </ThemeContainer>
  )
}

export default IndexPage
