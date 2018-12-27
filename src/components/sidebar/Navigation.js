import React from 'react'
import { css } from 'emotion'
import { Link } from 'gatsby'

const NavLink = props => (
  <li className={css(tw`mb-1`)}>
    <Link
      to={props.to}
      getProps={({ isCurrent }) => {
        return {
          className: isCurrent
            ? css(
                tw`text-purple-darker no-underline inline-block border-b-2 border-purple-dark`
              )
            : css(
                tw`text-purple no-underline inline-block border-b-2 border-transparent`
              ),
        }
      }}
    >
      {props.children}
    </Link>
  </li>
)

class Navigation extends React.Component {
  render() {
    return (
      <ul className={css(tw`list-reset mb-6`)}>
        <NavLink to="/">Blog</NavLink>
        <NavLink to="/talks">Talks</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    )
  }
}

export default Navigation
