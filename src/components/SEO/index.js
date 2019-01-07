import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            twitter
            logo
            siteUrl
            author
            twitter
          }
        }
      }
    `}
    render={data => {
      const seo = data.site.siteMetadata
      return (
        <Helmet>
          {/* General tags */}
          <title>Hello</title>
          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.logo} />

          {/* OpenGraph tags */}
          <meta property="og:url" content={seo.siteUrl} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image" content={seo.logo} />
          <meta property="fb:app_id" content="" />

          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content={seo.twitter} />
          <meta name="twitter:creator" content={seo.twitter} />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:image" content={seo.logo} />
        </Helmet>
      )
    }}
  />
)
