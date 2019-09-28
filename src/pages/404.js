/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw from 'tailwind.macro'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Page = () => (
  <Layout>
    <SEO
      title="404: Page not found | simonswiss.com"
      description="Oops! We have a 404 Error!"
      isPage={true}
    />
    <article>
      <h1 css={tw`mb-4 font-black leading-tight text-3xl lg:text-4xl`}>
        Oops - 404 Error!
      </h1>
      <p>Oh no! Looks like you've hit a page that doesn't exist.</p>
    </article>
  </Layout>
)

export default Page
