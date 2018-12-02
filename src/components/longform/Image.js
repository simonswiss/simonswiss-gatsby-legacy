import React from 'react'
import { css } from 'emotion'

export default ({ block }) => (
  <div className={css(tw`my-6`)}>
    <img
      className={css(tw`w-full shadow-lg rounded`)}
      src={block.image.url}
      alt={block.image.title}
    />
    {block.caption && (
      <p className={css(tw`mt-1 text-sm text-grey italic`)}>{block.caption}</p>
    )}
  </div>
)
