module.exports = {
  siteMetadata: {
    title: 'Fomo Crypto Calculator',
    description: 'Accurately quantify your crypto regret.',
    siteUrl: 'https://fomocryptocalculator.com'
  },
  proxy: {
    prefix: '/.netlify/functions',
    url: 'http://localhost:3000'
  },
  plugins: [
    'gatsby-plugin-use-query-params',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingId: 'G-H8W9KDDE2S'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Fomo Crypto Calculator',
        short_name: 'Fomo Crypto Calculator',
        description:
          'Determine exactly how much regret you should feel for not buying cryptocurrency sooner.',

        icon: './src/images/icon.png',
        start_url: '/',
        display: 'standalone'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    }
  ]
}
