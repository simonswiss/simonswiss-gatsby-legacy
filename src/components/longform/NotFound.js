import React from 'react'
import { css } from 'emotion'

export default ({ block }) => (
  <pre
    className={css(
      tw`mt-6 bg-red-lighter py-2 px-4 rounded text-red-darker font-bold shadow`
    )}
  >
    😭
    {block.__typename} block type not found
  </pre>
)
