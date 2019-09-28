/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw from 'tailwind.macro'

import {
  IconLink,
  LinkedInSvg,
  TwitterSvg,
  InstagramSvg,
  GitHubSvg,
  CodePenSvg,
  YouTubeSvg,
  MediumSvg,
} from './SocialIcons'

const SocialLinksList = () => (
  <nav css={tw`pt-0 mb-4 sm:mb-0`}>
    <IconLink
      url="https://twitter.com/simonswiss"
      title="Twitter"
      icon={<TwitterSvg />}
    />
    <IconLink
      url="http://codepen.io/simonswiss"
      title="CodePen"
      icon={<CodePenSvg />}
    />
    <IconLink
      url="https://youtube.com/simonswissdev"
      title="youtube"
      icon={<YouTubeSvg />}
    />
    <IconLink
      url="https://medium.com/@simonswiss/"
      title="Medium"
      icon={<MediumSvg />}
    />
    <IconLink
      url="https://github.com/simonswiss"
      title="GitHub"
      icon={<GitHubSvg />}
    />
    <IconLink
      url="https://instagram.com/simonswiss"
      title="Instagram"
      icon={<InstagramSvg />}
    />
    <IconLink
      url="https://www.linkedin.com/in/simon-vrachliotis-018a7a1b"
      title="LinkedIn"
      icon={<LinkedInSvg />}
    />
  </nav>
)

export default SocialLinksList
