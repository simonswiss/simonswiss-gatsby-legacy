/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw from 'tailwind.macro'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Teaser from '../components/teaser'
import { Seo } from '../components/seo'

export default (props) => {
  const talks = props.data.allMdx.edges
  const talksList = talks.map((post) => {
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
      <Seo
        title="Public speaking: Tech meetup and conference talks | simonswiss.com"
        description="Tech talks presented at conferences and meetups. I want to do more of this. Like my style and want me to speak at your event? Let's talk! :)"
        isPage={true}
      />
      <article>
        <div>
          <ul css={tw`list-none p-0`}>{talksList}</ul>
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/talks/" } }
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
