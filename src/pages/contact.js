import React from 'react'
import Layout from '../components/Layout'
import { css } from 'emotion'

class Page extends React.Component {
  render() {
    const page = this.props.data.dato.contact
    return (
      <Layout>
        <article>
          <h1
            className={css(
              tw`mb-4 font-black leading-tight text-3xl lg:text-4xl`
            )}
          >
            {page.title}
          </h1>
          <div
            className="cms"
            dangerouslySetInnerHTML={{ __html: page.body }}
          />
        </article>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query {
    dato {
      contact {
        title
        body(markdown: true)
      }
    }
  }
`
