import React from 'react'

import Headline from '../components/headline'
import Layout from '../components/layout'
import { Seo } from '../components/seo'

export default () => (
  <Layout>
    <Seo
      title="About me: who am I and what can I do? | simonswiss.com"
      description="Swiss front-end designer and developer based on Sydney's Northern Beaches.Proud father of two.Surf, basketball, ukulele.Love learning, love teaching."
      isPage={true}
    />

    <article>
      <Headline>Nice to meet you!</Headline>
      <div>
        <p>
          I enjoy writing clean frontend code and building good, human
          relationships. I love my work and am always on the lookout for
          interesting new projects.
        </p>
        <p>
          I also teach front-end development on{' '}
          <a href="https://egghead.io/instructors/simon-vrachliotis">
            egghead.io
          </a>{' '}
          and my{' '}
          <a href="https://www.youtube.com/simonswissdev">YouTube channel</a>,
          so go check these out! :)
        </p>
        <h3>My current skillset and weapons of choice:</h3>
        <ul>
          <li>
            <span role="img" aria-label="emoji">
              😇
            </span>{' '}
            Empathy, enthusiasm, passion! 🎉🌈
          </li>
          <li>
            <span role="img" aria-label="emoji">
              💻
            </span>{' '}
            HTML / CSS / JS
          </li>
          <li>
            <span role="img" aria-label="emoji">
              💡
            </span>{' '}
            Pug / Twig / Sass / ES6
          </li>
          <li>
            <span role="img" aria-label="emoji">
              ❤
            </span>
            ️ Craft CMS
          </li>
          <li>
            <span role="img" aria-label="emoji">
              🙉
            </span>{' '}
            Utility-first CSS
          </li>
          <li>
            <span role="img" aria-label="emoji">
              ⚛
            </span>
            ️ React / Preact / VueJS / Nuxt / Gatsby
          </li>
          <li>
            <span role="img" aria-label="emoji">
              🛠
            </span>{' '}
            Gulp / npm / webpack
          </li>
          <li>
            <span role="img" aria-label="emoji">
              ⚡
            </span>
            ️{' '}
            <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fsimonswiss.com&tab=mobile">
              Page Speed
            </a>{' '}
            & Performance
          </li>
          <li>
            <span role="img" aria-label="emoji">
              🐍
            </span>{' '}
            Snake-oil SEO
          </li>
          <li>
            <span role="img" aria-label="emoji">
              🤓
            </span>{' '}
            GIT / command line
          </li>
        </ul>
      </div>
    </article>
  </Layout>
)
