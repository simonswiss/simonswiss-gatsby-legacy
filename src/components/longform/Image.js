/** @jsx jsx */
import { jsx } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default ({ src, alt, caption, data }) => (
  <StaticQuery
    query={query}
    render={({ images }) => {
      const image = images.edges.find(
        image => src.indexOf(image.node.relativePath) > -1
      )
      return (
        <div css={tw`my-8`}>
          <Img
            fluid={image.node.childImageSharp.fluid}
            css={tw`w-full shadow-lg rounded`}
            alt={alt}
          />

          {caption && <p css={tw`mt-4 text-sm text-grey italic`}>{caption}</p>}
        </div>
      )
    }}
  />
)

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
