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
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
)
