/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw from 'tailwind.macro'

import {
  LinkedInSvg,
  TwitterSvg,
  InstagramSvg,
  GitHubSvg,
  CodePenSvg,
  YouTubeSvg,
  MediumSvg,
} from './SocialIcons'

const SocialIcon = ({ title, url, icon }) => (
  <a css={tw`text-gray-500 mr-2 hover:text-gray-600`} href={url} title={title}>
    {icon}
  </a>
)

const Social = () => (
  <nav css={tw`pt-0 mb-4 sm:mb-0`}>
    <SocialIcon
      url="https://twitter.com/simonswiss"
      title="Twitter"
      icon={<TwitterSvg />}
    />
    <SocialIcon
      href="http://codepen.io/simonswiss"
      title="CodePen"
      icon={<CodePenSvg />}
    />
    <SocialIcon
      href="https://youtube.com/simonswissdev"
      title="youtube"
      icon={<YouTubeSvg />}
    />
    <SocialIcon
      href="https://medium.com/@simonswiss/"
      title="Medium"
      icon={<MediumSvg />}
    />
    <SocialIcon
      href="https://github.com/simonswiss"
      title="GitHub"
      icon={<GitHubSvg />}
    />
    <SocialIcon
      href="https://instagram.com/simonswiss"
      title="Instagram"
      icon={<InstagramSvg />}
    />
    <SocialIcon
      href="https://www.linkedin.com/in/simon-vrachliotis-018a7a1b"
      title="LinkedIn"
      icon={<LinkedInSvg />}
    />
  </nav>
)

export default Social
