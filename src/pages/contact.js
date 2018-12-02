import React from 'react'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import { css } from 'emotion'

class Page extends React.Component {
  render() {
    const page = this.props.data.dato.contact
    return (
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
