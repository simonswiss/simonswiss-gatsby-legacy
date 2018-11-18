import React from 'react'
export default ({ block }) => (
  <div>
    <blockquote>
      {JSON.stringify(block, null, 4)}
      {block.quote}
    </blockquote>
    <cite>{block.authorName}</cite>
  </div>
)
