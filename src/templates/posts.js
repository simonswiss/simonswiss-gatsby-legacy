/** @jsx jsx */
import Disqus from 'disqus-react'
import { jsx } from '@emotion/core'
import tw from 'tailwind.macro'

import { graphql } from 'gatsby'
import dayjs from 'dayjs'

import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Headline from '../components/longform/Headline'

const components = {
  h2: Headline,
}

export default function PostTemplate(props) {
  const post = props.data.mdx
  const type = post.parent.sourceInstanceName
  const { body } = post

  const disqusShortname = 'simonswiss-1'
  const disqusConfig = {
    url: props.location.href,
    identifier: post.id,
    title: post.frontmatter.title,
  }

  return (
    <Layout isArticle type={type}>
      <SEO
        title={`${post.frontmatter.title} | ${type} | simonswiss`}
        description={post.frontmatter.intro}
      />
      <article css={tw`max-w-2xl`}>
        <h1 css={tw`text-3xl leading-tight`}>{post.frontmatter.title}</h1>

        <p css={tw`mb-6 uppercase tracking-wider text-sm text-gray-500`}>
          Posted on{' '}
          {post.frontmatter.postdate
            ? dayjs(post.frontmatter.postdate).format('MMMM D YYYY')
            : ''}
        </p>
        <div css={tw`mt-6`} />
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </article>
      <div css={tw`mt-12`}>
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
      body
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
    }
  }
`
