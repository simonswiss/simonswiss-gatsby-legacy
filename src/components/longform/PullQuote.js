import React from 'react'
import { Link } from 'gatsby'
export default ({ block }) => (
  <div>
    <blockquote>{block.quote}</blockquote>
    {block.authorLink ? (
      <Link to={block.authorLink}>
        <cite>{block.authorName}</cite>
      </Link>
    ) : (
      <cite>{block.authorName}</cite>
    )}
  </div>
)
