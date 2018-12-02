import React from 'react'
import { css } from 'emotion'

export default ({ block }) => (
  <div
    className={css(tw`mt-6`)}
    dangerouslySetInnerHTML={{ __html: block.embedCode }}
  />
)
