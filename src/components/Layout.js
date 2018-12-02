import React from 'react'
import { css, injectGlobal } from 'emotion'
import { Link } from 'gatsby'

import Navigation from './sidebar/Navigation'
import Bio from './sidebar/Bio'
import Social from './sidebar/Social'

class Layout extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarContainer}>
              <Bio />
              <Navigation />
              <Social />
            </div>
          </aside>
          <main className={styles.main}>{children}</main>
        </div>
        <script src="https://embed.small.chat/T5F7UGFT3G5G0GCT3P.js" async />
      </div>
    )
  }
}
export default Layout

const styles = {
  wrapper: css(tw`flex flex-col justify-between`),
  container: css(
    tw`my-8 md:my-16 max-w-xl mx-auto px-6 lg:flex font-sans leading-normal`
  ),
  sidebar: css(tw`md:w-full lg:w-1/3`),
  sidebarContainer: css(
    tw`pr-12 max-w-sm md:border-r border-grey-lighter mb-8`
  ),
  main: css(tw`md:w-full lg:w-2/3 lg:pl-16 max-w-md`),
}

injectGlobal`
html, body {
  ${tw`font-sans leading-normal`};
}
  a {
  color: config("colors.purple");
}

a:hover {
  color: config("colors.purple-dark");
}

h1,
h2,
h3,
h4 {
  ${tw`text-grey-darkest`};
}

h1 > a,
h2 > a,
h3 > a,
h4 > a {
  ${tw`text-grey-darkest`};
}

h1 > a:hover,
h2 > a:hover,
h3 > a:hover,
h4 > a:hover {
  ${tw`text-grey-darkest`};
}

h1,
h2 {
  ${tw`font-black`};
}

article ul,
article ol,
article h2,
article h3,
article h4 {
  ${tw`mb-6`};
}

article p {
  ${tw`mb-4`};
}

article p,
article li {
  ${tw`text-grey-darker`};
}
`
