import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'react-emotion'
import { css } from 'emotion'
import dayjs from 'dayjs'
import { stripHtml } from '../utils/stripHtml'

import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { withMDXScope } from 'gatsby-mdx/context'

import Layout from '../components/Layout'

export default function PostTemplate(props) {
  const { body } = props.data.mdx.code
  console.log('props', props.data)
  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: 'some stuff' }]}
        title="Hello"
      />
      <article className={css(tw`max-w-md`)}>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
    }
  }
`
