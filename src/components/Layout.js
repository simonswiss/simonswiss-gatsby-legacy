/** @jsx jsx */
import React from 'react'
import { jsx, css, Global } from '@emotion/core'
import { Link } from 'gatsby'

import GlobalStyles from '../components/GlobalStyles'
import Navigation from './sidebar/Navigation'
import Bio from './sidebar/Bio'
import Social from './sidebar/Social'
import Footer from './Footer'

class Layout extends React.Component {
  render() {
    const { children, isArticle, type } = this.props

    return (
      <React.Fragment>
        <GlobalStyles />
        {isArticle ? (
          <LayoutArticle children={children} type={type} />
        ) : (
          <LayoutMain children={children} />
        )}
      </React.Fragment>
    )
  }
}
export default Layout

// Main layout
const LayoutMain = ({ children }) => (
  <div css={tw`flex flex-col justify-between`}>
    <div
      css={tw`my-8 md:my-16 max-w-xl w-full mx-auto px-6 lg:flex font-sans leading-normal`}
    >
      <aside css={tw`md:w-full lg:w-1/3`}>
        <div css={tw`pr-12 max-w-sm lg:border-r lg:border-grey-lighter mb-8`}>
          <Bio />
          <Navigation />
          <Social />
        </div>
      </aside>
      <main css={tw`md:w-full lg:w-2/3 lg:pl-16 max-w-md`}>{children}</main>
    </div>
    <Footer />
  </div>
)

// Article layout
const LayoutArticle = ({ children, type }) => (
  <div css={tw`flex flex-col justify-between`}>
    <div css={tw`max-w-xxl p-8`}>
      <Link
        to={type === 'talks' ? '/talks' : '/'}
        css={tw`no-underline hover:underline text-purple nuxt-link-active`}
      >
        &larr; {type === 'talks' ? 'See all talks' : 'Back to blog'}
      </Link>
    </div>
    <div
      css={tw`mt-4 sm:mt-16 mb-8 max-w-md w-full mx-auto flex font-sans leading-normal px-4`}
    >
      <main>{children}</main>
    </div>
    <Footer />
  </div>
)
