import React from 'react'
import { Link } from 'gatsby'
import { css } from 'emotion'
import dayjs from 'dayjs'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { stripHtml } from '../utils/stripHtml'

class Page extends React.Component {
  render() {
    const { dato } = this.props.data
    const { title } = dato.blogHub
    const posts = dato.allBlogPosts
    const postsList = posts.map(post => {
      const strippedShortSummary = stripHtml(post.shortSummary)
      return (
        <li key={post.slug} className={css(tw`mb-8`)}>
          <ul className={css(tw`list-reset pa0 mb-2`)}>
            <li
              className={css(
                tw`mr-3 uppercase tracking-wide text-sm text-grey`
              )}
            >
              {post.postDate ? dayjs(post.postDate).format('MMMM YYYY') : ''}
            </li>
          </ul>
          <h2 className={css(tw`leading-tight mb-3 mt-0 font-black`)}>
            <Link
              to={`/blog/${post.slug}`}
              className={css(
                tw`no-underline text-grey-darkest hover:underline`
              )}
            >
              {post.title}
            </Link>
          </h2>
          <p className={css(tw`mt0 mb-4 text-grey-darker`)}>
            {strippedShortSummary}
          </p>

          <Link to={`blog/${post.slug}`}>Read more</Link>
        </li>
      )
    })
    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[
            {
              name: 'description',
              content:
                "Swiss front-end designer and developer based on Sydney's Northern Beaches.Proud father of two.Surf, basketball, ukulele.Love learning, love teaching.",
            },
          ]}
          title="simonswiss | Swiss front-end developer based in Sydney"
        />
        <article>
          <div className="cms">
            <ul className={css(tw`list-reset`)}>{postsList}</ul>
          </div>
        </article>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query {
    dato {
      blogHub {
        title
      }
      allBlogPosts(orderBy: [postDate_DESC]) {
        title
        shortSummary(markdown: true)
        slug
        postDate
      }
    }
  }
`
