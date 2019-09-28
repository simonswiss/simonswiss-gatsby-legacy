/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw from 'tailwind.macro'

const styles = {
  width: 'calc(100vw - 3rem)',
  maxWidth: 500,
}

export default ({ children }) => (
  <div css={[tw`my-8`, styles]}>
    <blockquote className="twitter-tweet" data-lang="en">
      {children}
    </blockquote>
  </div>
)
