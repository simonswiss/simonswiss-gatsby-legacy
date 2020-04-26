import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SEO = (props) => (
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
    render={(data) => {
      const seo = data.site.siteMetadata
      const title = props.title || seo.title
      const description = props.description || seo.description
      return (
        <Helmet>
          {/* General tags */}
          <title>{title} </title>
          <meta name="description" content={description} />
          <meta name="image" content={seo.logo} />

          {/* Article og:type */}
          {!props.isPage && <meta property="og:type" content="article" />}

          {/* OpenGraph tags */}
          <meta property="og:url" content={seo.siteUrl} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={seo.logo} />
          <meta property="fb:app_id" content="" />

          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content={seo.twitter} />
          <meta name="twitter:creator" content={seo.twitter} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={seo.logo} />
        </Helmet>
      )
    }}
  />
)

export default SEO
