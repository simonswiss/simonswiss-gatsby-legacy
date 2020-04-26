/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import tw from 'tailwind.macro'
import Footer from '../footer'

const LayoutArticle = ({ children, type }) => (
  <div css={tw`flex flex-col justify-between`}>
    <div css={tw`max-w-5xl p-8`}>
      <Link
        to={type === 'talks' ? '/talks' : '/'}
        css={tw`no-underline hover:underline text-purple-500`}
      >
        &larr; {type === 'talks' ? 'See all talks' : 'Back to blog'}
      </Link>
    </div>
    <div
      css={tw`mt-4 sm:mt-16 mb-8 max-w-2xl w-full mx-auto flex font-sans leading-normal px-4`}
    >
      <main>{children}</main>
    </div>
    <Footer />
  </div>
)

export default LayoutArticle
