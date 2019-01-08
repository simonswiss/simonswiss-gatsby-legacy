import React from 'react'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import SEO from '../components/SEO'
import { css } from 'emotion'

class Page extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="404: Page not found | simonswiss.com"
          description="Oops! We have a 404 Error!"
          isPage={true}
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
