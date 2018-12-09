import React from 'react'
import { css } from 'emotion'

export default () => (
  <footer className={css(tw`max-w-lg mx-auto px-4 my-8 w-full`)}>
    <p className={css(tw`text-grey-darker`)}>
      Built with 😍, <a href="https://www.gatsbyjs.org/">Gatsby</a> and{' '}
      <a href="https://tailwindcss.com">Tailwind CSS</a>.
    </p>
  </footer>
)
