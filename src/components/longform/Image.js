import React from 'react'
import { css } from 'emotion'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const query = graphql`
  query {
    images: allFile(filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }) {
      edges {
        node {
          extension
          relativePath
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ({ src, alt, caption, data }) => (
  <StaticQuery
    query={query}
    render={({ images }) => {
      const image = images.edges.find(
        image => src.indexOf(image.node.relativePath) > -1
      )
      return (
        <div className={css(tw`my-8`)}>
          <Img
            fluid={image.node.childImageSharp.fluid}
            className={css(tw`w-full shadow-lg rounded`)}
            alt={alt}
          />

          {caption && (
            <p className={css(tw`mt-4 text-sm text-grey italic`)}>{caption}</p>
          )}
        </div>
      )
    }}
  />
)
