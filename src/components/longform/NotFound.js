/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw from 'tailwind.macro'

export default ({ block }) => (
  <pre
    css={tw`mt-6 bg-red-200 py-2 px-4 rounded text-red-800 font-bold shadow`}
  >
    <span role="img" aria-label="emoji">
      😭
    </span>
    {block.__typename} block type not found
  </pre>
)
