/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';

const Footer = () => (
  <footer css={tw`max-w-4xl mx-auto px-4 my-8 w-full`}>
    <p css={tw`text-gray-700 md:text-lg`}>
      Built with{' '}
      <span role="img" aria-label="emoji">
        😍
      </span>
      , <a href="https://www.gatsbyjs.org/">Gatsby</a> and{' '}
      <a href="https://tailwindcss.com">Tailwind CSS</a>.
    </p>
  </footer>
);

export default Footer;
