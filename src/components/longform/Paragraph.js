import React from 'react'

export default ({ block }) => (
  <div dangerouslySetInnerHTML={{ __html: block.body }} />
)
