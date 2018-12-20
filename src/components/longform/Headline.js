import React from 'react'
import { css } from 'emotion'

export default ({ children }) => (
  <h2 className={css(tw`mt-10 mb-4 text-2xl leading-tight font-bold`)}>
    {children}
  </h2>
)
