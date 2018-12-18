import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'react-emotion'
import { css } from 'emotion'
import dayjs from 'dayjs'
import { stripHtml } from '../utils/stripHtml'

import Layout from '../components/Layout'

class PostTemplate extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[
            {
              name: 'description',
              content: 'some stuff',
            },
          ]}
          title="Hello"
        />
        <article className={css(tw`max-w-md`)}>
          <p>Here is your TALK template!</p>
        </article>
      </Layout>
    )
  }
}

export default PostTemplate
