/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Teaser from '../components/teaser';
import SEO from '../components/seo/seo';

const HomePage = (props) => (
  <Layout>
    <SEO
      title="Blog posts | simonswiss.com"
      description="Thoughts and personal experiences on front end development, and sometimes blogging about other stuff!"
      isPage={true}
    />
    <article>
      <div className="cms">
        <ul css={tw`list-none p-0`}>
          {props.data.allMdx.edges.map((post) => {
            const { node } = post;
            return (
              <Teaser
                type="posts"
                key={node.id}
                title={node.frontmatter.title}
                path={node.frontmatter.path}
                intro={node.frontmatter.intro}
                postdate={node.frontmatter.postdate}
              />
            );
          })}
        </ul>
      </div>
    </article>
  </Layout>
);

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
`;

export default HomePage;
