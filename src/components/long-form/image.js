/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export const Image = ({ src, alt, caption }) => {
  const data = useStaticQuery(
    graphql`
      query {
        images: allFile(
          filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
        ) {
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
  );

  const image = data.images.edges.find(
    (image) => src.indexOf(image.node.relativePath) > -1
  );

  return (
    <div css={tw`my-8`}>
      <Img
        fluid={image.node.childImageSharp.fluid}
        css={tw`w-full shadow-lg rounded`}
        alt={alt}
      />

      {caption && <p css={tw`mt-4 text-sm text-gray italic`}>{caption}</p>}
    </div>
  );
};
