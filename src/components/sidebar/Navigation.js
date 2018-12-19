import React from 'react'
import { css } from 'emotion'
import { Link } from 'gatsby'

class Navigation extends React.Component {
  render() {
    return (
      <ul className={css(tw`list-reset mb-6`)}>
        <li className={css(tw`mb-1`)}>
          <Link
            className={css(tw`text-purple no-underline hover:underline`)}
            to="/"
          >
            Blog
          </Link>
        </li>
        <li className={css(tw`mb-1`)}>
          <Link
            className={css(tw`text-purple no-underline hover:underline`)}
            to="/talks"
          >
            Talks
          </Link>
        </li>

        <li className={css(tw`mb-1`)}>
          <Link
            className={css(tw`text-purple no-underline hover:underline`)}
            to="/about"
          >
            About
          </Link>
        </li>

        <li className={css(tw`mb-1`)}>
          <Link
            className={css(tw`text-purple no-underline hover:underline`)}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    )
  }
}

export default Navigation
