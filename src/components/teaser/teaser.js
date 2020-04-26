/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';

import dayjs from 'dayjs';
import { Link } from 'gatsby';

const Teaser = ({ title, path, intro, postdate, type }) => (
  <li css={tw`mb-8`}>
    <ul css={tw`list-none p-0 p-0 mb-2`}>
      <li css={tw`mr-3 uppercase tracking-wider text-sm text-gray-500`}>
        {postdate && dayjs(postdate).format('MMMM YYYY')}
      </li>
    </ul>
    <h2 css={tw`leading-tight mb-3 mt-0 font-black`}>
      <Link to={`/${type}/${path}`} css={tw`no-underline hover:underline`}>
        {title}
      </Link>
    </h2>
    <p css={tw`mt-0 mb-4`}>{intro}</p>
    <Link to={`/${type}/${path}`}>Read more</Link>
  </li>
);

export default Teaser;
