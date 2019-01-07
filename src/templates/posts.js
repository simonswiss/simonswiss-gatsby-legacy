import React from 'react'
import Disqus from 'disqus-react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'react-emotion'
import { css } from 'emotion'
import dayjs from 'dayjs'

import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/tag'

import Layout from '../components/Layout'
import Headline from 'components/longform/Headline'

const components = {
  h2: Headline,
}

export default function PostTemplate(props) {
  const post = props.data.mdx
  const type = post.parent.sourceInstanceName
  const { body } = post.code

  const disqusShortname = 'simonswiss-1'
  const disqusConfig = {
    url: props.location.href,
    identifier: post.id,
    title: post.frontmatter.title,
  }

  return (
    <Layout isArticle type={type}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[
          { name: 'description', content: post.frontmatter.intro },
          { name: 'twitter:title', content: post.frontmatter.title },
          { name: 'twitter:description', content: post.frontmatter.intro },
          { property: 'og:title', content: post.frontmatter.title },
          { property: 'og:description', content: post.frontmatter.intro },
          { property: 'og:type', content: 'article' },
        ]}
        title={`${post.frontmatter.title} | ${type} | simonswiss`}
      />
      <article className={css(tw`max-w-md`)}>
        <h1 className={css(tw`text-3xl leading-tight`)}>
          {post.frontmatter.title}
        </h1>

        <p className={css(tw`text-grey mb-6`)}>
          Posted on{' '}
          {post.frontmatter.postdate
            ? dayjs(post.frontmatter.postdate).format('MMMM D YYYY')
            : ''}
        </p>
        <div className={css(tw`mt-6`)} />
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </article>
      <div className={css(tw`mt-12`)}>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
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
