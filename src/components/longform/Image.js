import React from 'react'
import { css } from 'emotion'

export default ({ block }) => (
  <img
    className={css(tw`w-full shadow-lg rounded my-4`)}
    src={block.image.url}
    alt={block.image.title}
  />
)
