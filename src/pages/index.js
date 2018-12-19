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
