import React from 'react'
import { css } from 'emotion'

export default ({ block }) => (
  <img
    className={css(tw`w-full`)}
    src={block.image.url}
    alt={block.image.title}
  />
)
