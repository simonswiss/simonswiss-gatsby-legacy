/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw from 'tailwind.macro'

export default ({ children }) => (
  <p
    css={[
      tw`text-xl text-gray-600 mb-8`,
      {
        a: tw`px-2 text-purple-600 bg-purple-100 no-underline py-1 hover:bg-purple-500 hover:text-purple-100`,
      },
    ]}
  >
    {children}
  </p>
)
