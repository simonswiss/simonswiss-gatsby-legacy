/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'

const styles = css`
  ${tw`text-xl text-grey-dark mb-8`};
  a {
    ${tw`px-2 text-purple-dark bg-purple-lightest no-underline py-1 hover:bg-purple hover:text-purple-lightest`};
  }
`
export default ({ children }) => <p css={styles}>{children}</p>
