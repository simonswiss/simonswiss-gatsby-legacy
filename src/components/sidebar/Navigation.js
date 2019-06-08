/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'

const Navigation = () => (
  <ul css={tw`list-reset mb-6`}>
    <NavLink to="/">Blog</NavLink>
    <NavLink to="/talks">Talks</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </ul>
)

const NavLink = props => (
  <li css={tw`mb-1`}>
    <Link
      to={props.to}
      style={tw`text-purple no-underline inline-block border-b-2 border-transparent`}
      activeStyle={tw`text-purple-darker no-underline inline-block border-b-2 border-purple-dark`}
    >
      {props.children}
    </Link>
  </li>
)

export default Navigation
