import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'react-emotion'
import { css } from 'emotion'
import dayjs from 'dayjs'

import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Layout from '../components/Layout'

export default function PostTemplate(props) {
  const post = props.data.mdx
  const type = post.parent.sourceInstanceName
  const { body } = post.code
  return (
    <Layout isArticle type={type}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: 'some stuff' }]}
        title="Hello"
      />
      <article className={css(tw`max-w-md`)}>
        <h2 className={css(tw`text-3xl leading-tight`)}>
          {post.frontmatter.title}
        </h2>

        <p className={css(tw`text-grey mb-6`)}>
          Posted on{' '}
          {post.frontmatter.postdate
            ? dayjs(post.frontmatter.postdate).format('MMMM D YYYY')
            : ''}
        </p>
        <div className={css(tw`mt-6`)} />
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        path
        intro
        postdate
      }
      parent {
        ... on File {
          sourceInstanceName
        }
      }
      code {
        body
      }
    }
  }
`
