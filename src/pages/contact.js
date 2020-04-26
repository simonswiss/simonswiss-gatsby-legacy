import React from 'react'

import Headline from '../components/headline'
import Layout from '../components/layout'
import { Seo } from '../components/seo'

export default () => (
  <Layout>
    <Seo
      title="Contact: let's get in touch! | simonswiss.com"
      description="I am friendly. 👋 And Swiss. 🇨🇭 Which means I am both nice and reliable! Want to get in contact? Say hello, don’t be shy!"
      isPage={true}
    />
    <article>
      <Headline>Let's have a chat!</Headline>
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
