/** @jsx jsx */
import { jsx } from '@emotion/core'

export default ({ children }) => (
  <h2 css={tw`mt-10 mb-4 text-2xl leading-tight font-bold`}>{children}</h2>
)
