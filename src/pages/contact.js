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
            'I am friendly. 👋 And Swiss. 🇨🇭 Which means I am both nice and reliable! Want to get in contact? Say hello, don’t be shy!',
        },
      ]}
      title="Contact: let's get in touch! | simonswiss.com"
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
        <p>
          Send me <a href="mailto:simon@simonswiss.com">an e-mail</a>, don’t be
          shy!
        </p>
      </div>
    </article>
  </Layout>
)
