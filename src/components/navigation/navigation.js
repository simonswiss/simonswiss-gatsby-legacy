/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw from 'tailwind.macro'
import { Link } from 'gatsby'

const Navigation = () => (
  <ul css={tw`list-none p-0 mb-6`}>
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
      style={tw`text-purple-500 no-underline inline-block border-b-2 border-transparent`}
      activeStyle={tw`text-purple-800 no-underline inline-block border-b-2 border-purple-600`}
    >
      {props.children}
    </Link>
  </li>
)

export default Navigation
