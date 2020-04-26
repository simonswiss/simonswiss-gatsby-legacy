/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';

const Headline = ({ children }) => (
  <h1 css={tw`mb-4 font-black leading-tight text-3xl lg:text-4xl`}>
    {children}
  </h1>
);

export default Headline;
