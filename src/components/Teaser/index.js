import React from 'react'
import { css } from 'emotion'
import dayjs from 'dayjs'
import { Link } from 'gatsby'

export default ({ title, path, intro, postdate, type }) => (
  <li className={css(tw`mb-8`)}>
    <ul className={css(tw`list-reset pa0 mb-2`)}>
      <li className={css(tw`mr-3 uppercase tracking-wide text-sm text-grey`)}>
        {postdate && dayjs(postdate).format('MMMM YYYY')}
      </li>
    </ul>
    <h2 className={css(tw`leading-tight mb-3 mt-0 font-black`)}>
      <Link
        to={`/${type}/${path}`}
        className={css(tw`no-underline text-grey-darkest hover:underline`)}
      >
        {title}
      </Link>
    </h2>
    <p className={css(tw`mt0 mb-4 text-grey-darker`)}>{intro}</p>
    <Link to={`${type}/${path}`}>Read more</Link>
  </li>
)
