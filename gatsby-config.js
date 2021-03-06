require("dotenv").config()

const queries = require("./src/utils/algolia_queries")

module.exports = {
    siteMetadata: {
        title: `Jonas Marco`,
        position: `Programador Full Stack`,
        description: `A blog made with GatsbyJS.`,
        author: `@jonasmarco`,
        siteUrl: `https://gatsby-blog-jonas.netlify.app/`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        // needs to be first to work with gatsby-remark-images
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `uploads`,
                path: `${__dirname}/static/assets/img`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts`,
            },
        },
        {
            resolve: 'gatsby-plugin-transition-link',
            options: {
                injectPageProps: false,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-relative-images",
                        options: {
                            name: "uploads"
                        }
                    },
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 960,
                            linkImagesToOriginal: false
                        }
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            aliases: {
                                sh: "shell",
                                es6: "javascript",
                                env: "bash",
                                mdx: "md",
                                ".json": "json",
                            },
                        },
                    },
                    `gatsby-remark-lazy-load`,
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-algolia-search`,
            options: {
                appId: process.env.GATSBY_ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_ADMIN_KEY,
                indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
                    queries,
                    chunkSize: 10000, // default: 1000
                    enablePartialUpdates: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `John Doe`,
                short_name: `John Doe`,
                start_url: `/`,
                background_color: `#16202c`,
                theme_color: `#16202c`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sitemap`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
        `gatsby-plugin-netlify-cms`
    ],
}
