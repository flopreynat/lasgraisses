import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import footerStyles from './footer.module.scss';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className="py-5 bg-black">
            <div class="container">
                <p class="m-0 text-center text-white small">Tous droits réservés © - {data.site.siteMetadata.author}</p>
            </div>
      </footer>
    )
}

export default Footer