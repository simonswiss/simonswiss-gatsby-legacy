import React from 'react'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import { css } from 'emotion'

class Page extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[
            {
              name: 'description',
              content: 'Oops! We have a 404 Error!',
            },
          ]}
          title="404 | simonswiss.com"
        />
        <article>
          <h1
            className={css(
              tw`mb-4 font-black leading-tight text-3xl lg:text-4xl`
            )}
          >
            Oops - 404 Error!
          </h1>
          <p>Oh no! Looks like you've hit a page that doesn't exist.</p>
        </article>
      </Layout>
    )
  }
}

export default Page
