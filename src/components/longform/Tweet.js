import React from 'react'
import { css } from 'emotion'

export default ({ block }) => (
  <div className={css(tw`mt-8`)}>
    <blockquote className="twitter-tweet" data-lang="en">
      <div dangerouslySetInnerHTML={{ __html: block.tweet }} />
    </blockquote>
  </div>
)
