import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { css } from 'emotion'

import Layout from '../components/Layout'

export default () => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[
        {
          name: 'description',
          content:
            "Swiss front-end designer and developer based on Sydney's Northern Beaches.Proud father of two.Surf, basketball, ukulele.Love learning, love teaching.",
        },
      ]}
      title="About me: who am I and what can I do? | simonswiss.com"
    />
    <article>
      <h1
        className={css(tw`mb-4 font-black leading-tight text-3xl lg:text-4xl`)}
      >
        Nice to meet you!
      </h1>
      <div className="cms">
        <p>
          I enjoy writing clean frontend code and building good, human
          relationships. I love my work and am always on the lookout for
          interesting new projects.
        </p>
        <p>
          I also teach front-end development on egghead.io and my YouTube
          channel, so go check these out! :)
        </p>
        <h3>My current skillset and weapons of choice:</h3>
        <ul>
          <li>😇 Empathy, enthusiasm, passion! 🎉🌈</li>
          <li>💻 HTML / CSS / JS</li>
          <li>💡 Pug / Twig / Sass / ES6</li>
          <li>❤️ Craft CMS</li>
          <li>🙉 Utility-first CSS</li>
          <li>⚛️ React / Preact / VueJS / Nuxt / Gatsby</li>
          <li>🛠 Gulp / npm / webpack</li>
          <li>⚡️ Page Speed & Performance</li>
          <li>🐍 Snake-oil SEO</li>
          <li>🤓 GIT / command line</li>
        </ul>
      </div>
    </article>
  </Layout>
)
