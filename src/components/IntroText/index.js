import React from 'react'
import styled from 'react-emotion'

const StyledP = styled.p`
  ${tw`text-xl text-grey-dark mb-8`};
  a {
    ${tw`px-2 text-purple-dark bg-purple-lightest no-underline py-1 hover:bg-purple hover:text-purple-lightest`};
  }
`

function IntroText({ children }) {
  return <StyledP>{children}</StyledP>
}

export default IntroText
