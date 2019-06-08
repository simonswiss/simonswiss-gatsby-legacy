/** @jsx jsx */
import { jsx } from '@emotion/core'

export default ({ children }) => (
  <p
    css={[
      tw`text-xl text-grey-dark mb-8`,
      {
        a: tw`px-2 text-purple-dark bg-purple-lightest no-underline py-1 hover:bg-purple hover:text-purple-lightest`,
      },
    ]}
  >
    {children}
  </p>
)
