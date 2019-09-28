/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw from 'tailwind.macro'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default () => (
  <Layout>
    <SEO
      title="Contact: let's get in touch! | simonswiss.com"
      description="I am friendly. 👋 And Swiss. 🇨🇭 Which means I am both nice and reliable! Want to get in contact? Say hello, don’t be shy!"
      isPage={true}
    />
    <article>
      <h1 css={tw`mb-4 font-black leading-tight text-3xl lg:text-4xl`}>
        Let's have a chat!
      </h1>
      <div>
        <p>
          I am friendly.{' '}
          <span role="img" aria-label="emoji">
            👋
          </span>{' '}
          And Swiss. 🇨🇭 Which means I am both nice and reliable!
        </p>
        <p>
          Send me <a href="mailto:simon@simonswiss.com">an e-mail</a>, don’t be
          shy!
        </p>
      </div>
    </article>
  </Layout>
)
