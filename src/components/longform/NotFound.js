/** @jsx jsx */
import { jsx } from '@emotion/core'

export default ({ block }) => (
  <pre
    css={tw`mt-6 bg-red-lighter py-2 px-4 rounded text-red-darker font-bold shadow`}
  >
    😭
    {block.__typename} block type not found
  </pre>
)
