import React from 'react';

export const Paragraph = ({ block }) => (
  <div dangerouslySetInnerHTML={{ __html: block.body }} />
);
