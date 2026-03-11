/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `hazimete`,
    siteUrl: `https://konezunko.github.io/`,
    
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Add plugin options here
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/markdown-pages/`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `5drygn20p7kb`,
        accessToken: `bVosdOQXPHvCYCURLSQeHtM3kVvhD95BBKBhGpXU3Rw`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              staticFolderName: 'static',
              include: ['featured'],
              exclude: ['featured.skip'],
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 640,
            },
          },
        ],
      },
    },
  ],
};
