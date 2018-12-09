import React from 'react'
import { css } from 'emotion'
// import Img from 'gatsby-image'

export default ({ block }) => (
  <div className={css(tw`my-8`)}>
    <img
      src={block.image.url}
      className={css(tw`w-full shadow-lg rounded`)}
      alt={block.image.title}
    />
    {block.caption && (
      <p className={css(tw`mt-1 text-sm text-grey italic`)}>{block.caption}</p>
    )}
  </div>
)
