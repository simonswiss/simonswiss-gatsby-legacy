import React from 'react'
import { Link } from 'gatsby'
import Teaser from '../components/Teaser'
import { css } from 'emotion'
import dayjs from 'dayjs'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

export default props => {
  const posts = props.data.allMdx.edges
  const postsList = posts.map(post => {
    const { node } = post
    return (
      <Teaser
        type="posts"
        key={node.id}
        title={node.frontmatter.title}
        path={node.frontmatter.path}
        intro={node.frontmatter.intro}
        postdate={node.frontmatter.postdate}
      />
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
              'Thoughts and personal experiences on front end development, and sometimes blogging about other stuff!',
          },
        ]}
        title="Blog posts | simonswiss.com"
      />
      <article>
        <div className="cms">
          <ul className={css(tw`list-reset`)}>{postsList}</ul>
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { order: DESC, fields: [frontmatter___postdate] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            postdate
            intro
          }
        }
      }
    }
  }
`
