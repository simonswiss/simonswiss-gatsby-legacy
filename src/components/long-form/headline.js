/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';

export const Headline = ({ children }) => (
  <h2
    css={tw`mt-10 lg:mt-12 mb-4 lg:mb-8 text-2xl sm:text-3xl lg:text-4xl leading-tight font-bold`}
  >
    {children}
  </h2>
);
