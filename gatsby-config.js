module.exports = {
    siteMetadata: {
        title: 'Mairie de Lasgraïsses',
        author: 'Mairie de Lasgraïsses'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/src/posts`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'events',
                path: `${__dirname}/src/events`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        }
    ]
}