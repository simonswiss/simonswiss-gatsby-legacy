import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { css } from 'emotion'

import Layout from '../components/Layout'

class BlogIndex extends React.Component {
  render() {
    const { title, body } = this.props.data.dato.homepage

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: 'hello' }]}
          title="simonswiss"
        />
        <article>
          <h1
            className={css(
              tw`mb-4 font-black leading-tight text-3xl lg:text-4xl`
            )}
          >
            {title}
          </h1>
          <div className="cms" dangerouslySetInnerHTML={{ __html: body }} />
        </article>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    dato {
      homepage {
        title
        body(markdown: true)
      }
    }
  }
`
