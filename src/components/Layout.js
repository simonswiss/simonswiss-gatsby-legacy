import React from 'react'
import { css, injectGlobal } from 'emotion'
import { Link } from 'gatsby'

import Navigation from './sidebar/Navigation'
import Bio from './sidebar/Bio'
import Social from './sidebar/Social'
import Footer from './Footer'

class Layout extends React.Component {
  render() {
    const { location, children, isArticle } = this.props

    const layoutMain = (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarContainer}>
              <Bio />
              <Navigation />
              <Social />
            </div>
          </aside>
          <main className={css(tw`md:w-full lg:w-2/3 lg:pl-16 max-w-md`)}>
            {children}
          </main>
        </div>
        <Footer />
      </div>
    )

    const layoutArticle = (
      <div className={styles.wrapper}>
        <div className={css(tw`max-w-xxl p-8`)}>
          <Link
            to="/"
            className={css(
              tw`no-underline hover:underline text-purple nuxt-link-active`
            )}
          >
            &larr; back to blog
          </Link>
        </div>
        <div
          className={css(
            tw`mt-4 sm:mt-16 mb-8 max-w-md mx-auto flex font-sans leading-normal px-4`
          )}
        >
          <main className={css(tw`max-w-md`)}>{children}</main>
        </div>
        <Footer />
      </div>
    )

    // Use the appropriate layout
    return isArticle ? layoutArticle : layoutMain
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
    tw`pr-12 max-w-sm lg:border-r lg:border-grey-lighter mb-8`
  ),
}

injectGlobal`
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

body {
  margin: 0;
}

h1 {
  font-size: 2em;
  margin: .67em 0;
}

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted; /* 2 */
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

small {
  font-size: 80%;
}


sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}


img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}


button,
input {
  /* 1 */
  overflow: visible;
}


button,
select {
  /* 1 */
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: .35em .75em .625em;
}

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}


[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}


[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

  details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

html {
  box-sizing: border-box; /* 1 */
  font-family: sans-serif; /* 2 */
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
figure,
p,
pre {
  margin: 0;
}

button {
  background: transparent;
  padding: 0;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

fieldset {
  margin: 0;
  padding: 0;
}

ol,
ul {
  margin: 0;
}
*,
*::before,
*::after {
  border-width: 0;
  border-style: solid;
  border-color: #dae1e7;
}

img {
  border-style: solid;
}

textarea {
  resize: vertical;
}

img {
  max-width: 100%;
  height: auto;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: inherit;
  opacity: .5;
}

input::-ms-input-placeholder,
textarea::-ms-input-placeholder {
  color: inherit;
  opacity: .5;
}

input::placeholder,
textarea::placeholder {
  color: inherit;
  opacity: .5;
}

button,
[role="button"] {
  cursor: pointer;
}

table {
  border-collapse: collapse;
}

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
  ${tw`my-4`};
}

article p,
article li {
  ${tw`text-grey-darkest`};
}
`
