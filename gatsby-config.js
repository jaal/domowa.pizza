const userConfig = require('./config');

module.exports = {
  siteMetadata: {
    title: userConfig.title,
    author: userConfig.author,
    description: userConfig.description,
    siteUrl: userConfig.siteUrl,
  },
  pathPrefix: userConfig.pathPrefix,
  plugins: [
    {
      resolve: `gatsby-plugin-posthog`,
      options: {
        apiKey: "phc_62ytj9wxvmZuXBgVw8cvz2ZGOB0q4xQXVU96GJSN9rq",
        apiHost: "https://eu.posthog.com",
        head: true,
        isEnabledDevMode: true,
        initOptions: {},
      },
    },
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `najlepszyprzepisnapizzecom`
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-53025230-1',
          cookieName: 'gatsby-gdpr-google-analytics',
        }
      },
    },
    `gatsby-plugin-force-trailing-slashes`
  ],
};
