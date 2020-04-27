/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';

export const PullQuote = ({ link, author, children }) => (
  <div css={tw`border-l-4 border-purple-500 pl-4 my-10`}>
    <blockquote css={tw`font-serif italic text-2xl`}>{children}</blockquote>
    {link ? (
      <a href={link}>
        <cite>{author}</cite>
      </a>
    ) : (
      <cite css={tw`block mt-3 not-italic text-gray-700`}>~ {author}</cite>
    )}
  </div>
);
