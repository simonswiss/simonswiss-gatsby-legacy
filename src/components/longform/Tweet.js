import React from 'react'
import { css } from 'emotion'

const styles = css({
  width: 'calc(100vw - 3rem)',
  maxWidth: 500,
})

export default ({ children }) => (
  <div className={styles + ' ' + css(tw`my-8`)}>
    <blockquote className="twitter-tweet" data-lang="en">
      {children}
    </blockquote>
  </div>
)
