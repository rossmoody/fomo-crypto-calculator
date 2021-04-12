module.exports = {
  siteMetadata: {
    title: "Fomo Crypto Calculator",
    description: "Accurately quantify your crypto regret.",
    siteUrl: "https://fomocryptocalculator.com"
  },
  proxy: {
    prefix: "/.netlify/functions",
    url: "http://localhost:3000"
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-DLZ5XDZ406"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Fomo Crypto Calculator",
        short_name: "Fomo Calculator",
        description: "Accurately quantify your crypto regret.",
        icon: "./src/images/icon.png",
        start_url: "/",
        display: "standalone"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    }
  ]
}
