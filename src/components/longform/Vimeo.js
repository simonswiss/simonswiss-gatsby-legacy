import React from 'react'
import { css } from 'emotion'

const utilities = css(tw`my-8`)
const styles = css({
  position: 'relative',
  paddingBottom: '56.25%',
  height: 0,
  overflow: 'hidden',
  maxWidth: '100%',
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
})

export default ({ id }) => (
  <div className={`${styles} ${utilities}`}>
    <iframe
      src={`https://player.vimeo.com/video/${id}`}
      width="640"
      height="360"
      frameBorder="0"
      webkitAllowFullScreen
      mozAllowFullScreen
      allowFullScreen
    />
  </div>
)
