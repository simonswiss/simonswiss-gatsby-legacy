import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'react-emotion'
import { css } from 'emotion'
import dayjs from 'dayjs'
import { stripHtml } from '../utils/stripHtml'

import Layout from '../components/Layout'
import Headline from '../components/longform/Headline'
import CodeBlock from '../components/longform/CodeBlock'
import Paragraph from '../components/longform/Paragraph'
import Image from '../components/longform/Image'
import PullQuote from '../components/longform/PullQuote'
import Tweet from '../components/longform/Tweet'
import Video from '../components/longform/Video'
import NotFound from '../components/longform/NotFound'

const IntroText = styled('div')`
  p {
    ${tw`text-xl text-grey-dark mb-8`};
  }
  a {
    ${tw`text-grey-darker border-b border-grey-darker hover:border-b-2 no-underline`};
  }
`
// introText: `${css(tw`text-xl text-grey-light`)} color: red;`,

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.dato.blogPost
    const summary = stripHtml(post.shortSummary)
    const postDate = post.postDate
      ? dayjs(post.postDate).format('MMMM D YYYY')
      : ''
    const longFormPost = this.props.data.dato.blogPost.longformPost.map(
      (block, i) => {
        switch (block.__typename) {
          case 'DatoCMS_HeadlineRecord':
            return <Headline key={i} block={block} />
          case 'DatoCMS_ParagraphRecord':
            return <Paragraph key={i} block={block} />
          case 'DatoCMS_CodeBlockRecord':
            return <CodeBlock key={i} block={block} />
          case 'DatoCMS_ImageRecord':
            return <Image key={i} block={block} />
          case 'DatoCMS_PullquoteRecord':
            return <PullQuote key={i} block={block} />
          case 'DatoCMS_TweetRecord':
            return <Tweet key={i} block={block} />
          case 'DatoCMS_VideoRecord':
            return <Video key={i} block={block} />
          default:
            return <NotFound key={i} block={block} />
        }
      }
    )

    return (
      <Layout isArticle>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[
            {
              name: 'description',
              content: summary,
            },
          ]}
          title={`${post.title} | simonswiss`}
        />
        <article className={css(tw`max-w-md`)}>
          <h2 className={css(tw`text-3xl leading-tight`)}>{post.title}</h2>

          <p className={css(tw`text-grey mb-6`)}>Posted on {postDate}</p>

          <IntroText dangerouslySetInnerHTML={{ __html: post.shortSummary }} />

          <div className={css(tw`mt-6`)} />
          {longFormPost}
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    dato {
      blogPost(filter: { slug: { eq: $slug } }) {
        title
        postDate
        shortSummary(markdown: true)
        longformPost {
          ... on DatoCMS_HeadlineRecord {
            headline
          }
          ... on DatoCMS_ParagraphRecord {
            body(markdown: true)
          }
          ... on DatoCMS_CodeBlockRecord {
            codeBlock
          }
          ... on DatoCMS_ImageRecord {
            image {
              url
              title
              alt
            }
            caption
          }
          ... on DatoCMS_TweetRecord {
            tweet
          }
          ... on DatoCMS_VideoRecord {
            embedCode
            caption
          }
          ... on DatoCMS_PullquoteRecord {
            quote
            authorName
            authorLink
          }
        }
      }
    }
  }
`
