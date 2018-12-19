import React from 'react'
import { Link } from 'gatsby'
import { css } from 'emotion'
import dayjs from 'dayjs'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Teaser from '../components/Teaser'
import { stripHtml } from '../utils/stripHtml'

export default props => {
  const talks = props.data.allMdx.edges
  console.log(talks)

  const talksList = talks.map(post => {
    const { node } = post
    return (
      <Teaser
        type="talks"
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
          <ul className={css(tw`list-reset`)}>{talksList}</ul>
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/talks/" } }) {
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
