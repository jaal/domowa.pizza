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
    `gatsby-plugin-netlify-cms`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: userConfig.title,
        short_name: userConfig.title,
        start_url: userConfig.siteUrl,
        background_color: '#fff',
        theme_color: userConfig.primaryColor,
        display: 'minimal-ui',
        icon: 'src/main.jpg',
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: "gatsby-plugin-categories",
    //   options: {
    //     templatePath: `${__dirname}/src/templates/category.js`,
    //   //   query: `
    //   //   {
    //   //     allMarkdownRemark {
    //   //       edges {
    //   //         node {
    //   //           fields {
    //   //             tags
    //   //           }
    //   //         }
    //   //       }
    //   //     }
    //   //   }
    //   // `,
    //   // prefix: "/tags/",
    //   // transformer: ({
    //   //   data
    //   // }) => data.allMarkdownRemark.edges.map(({node}) => node),
    //   // slugOptions: {
    //   //   lower: true
    //   // }
    //   },
    // },
    {
      resolve: "gatsby-plugin-tags",
      options: {
        templatePath: `${__dirname}/src/templates/tags.js`,
        prefix: "/tag/",
      },
    },
    // {
    //   resolve: "gatsby-plugin-tags",
    //   options: {
    //     templatePath: `${__dirname}/src/templates/categories.js`,
    //     prefix: "/tag/",
    //   },
    // },
  ],
};
