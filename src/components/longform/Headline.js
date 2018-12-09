import React from 'react'
import { css } from 'emotion'

export default ({ block }) => (
  <h2 className={css(tw`mt-10 mb-4 text-2xl leading-tight font-bold`)}>
    {block.headline}
  </h2>
)
