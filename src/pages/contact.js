import React from 'react'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import { css } from 'emotion'

export default () => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[
        {
          name: 'description',
          content:
            'I am friendly. 👋 And Swiss. 🇨🇭 Which means I am both nice and reliable! Say hello in the live chat or send me an e-mail, don’t be shy!',
        },
      ]}
      title="Get in touch | simonswiss.com"
    />
    <article>
      <h1
        className={css(tw`mb-4 font-black leading-tight text-3xl lg:text-4xl`)}
      >
        Let's have a chat!
      </h1>
      <div className="cms">
        <p>
          I am friendly. 👋 And Swiss. 🇨🇭 Which means I am both nice and
          reliable!
        </p>
        <p>Send me an e-mail, don’t be shy!</p>
      </div>
    </article>
  </Layout>
)
