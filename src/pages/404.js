import React from 'react'

import Headline from '../components/headline'
import Layout from '../components/layout'
import { Seo } from '../components/seo'

const Page = () => (
  <Layout>
    <Seo
      title="404: Page not found | simonswiss.com"
      description="Oops! We have a 404 Error!"
      isPage={true}
    />
    <article>
      <Headline>Oops - 404 Error!</Headline>
      <p>Oh no! Looks like you've hit a page that doesn't exist.</p>
    </article>
  </Layout>
)

export default Page
