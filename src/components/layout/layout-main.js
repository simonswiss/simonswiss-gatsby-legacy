/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw from 'tailwind.macro'

import Bio from '../bio'
import Navigation from '../navigation'
import SocialLinksList from '../social-icons'
import Footer from '../footer'

// Main layout
const LayoutMain = ({ children }) => (
  <div css={tw`flex flex-col justify-between max-w-2xl lg:max-w-none mx-auto`}>
    <div
      css={tw`my-8 md:my-16 max-w-5xl w-full mx-auto px-6 lg:flex font-sans leading-normal`}
    >
      <aside css={tw`md:w-full lg:w-1/3`}>
        <div css={tw`sm:pr-12 max-w-sm lg:border-r lg:border-gray-200 mb-8`}>
          <Bio />
          <Navigation />
          <SocialLinksList />
        </div>
      </aside>
      <main css={tw`md:w-full lg:w-2/3 lg:pl-16 max-w-xl`}>{children}</main>
    </div>
    <Footer />
  </div>
)

export default LayoutMain
