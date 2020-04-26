/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';
import { graphql } from 'gatsby';
import dayjs from 'dayjs';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';
import { Headline } from '../components/long-form';
import SEO from '../components/seo/seo';

const components = {
  h2: Headline,
};

const PostTemplate = (props) => {
  const post = props.data.mdx;
  const type = post.parent.sourceInstanceName;
  const { body } = post;

  const twitterSearchParam = encodeURIComponent(
    `simonswiss ${post.frontmatter.title}`
  );

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

      <footer css={tw`mt-16 mb-8`}>
        <hr css={tw`border-t border-2 border-gray-300 w-16 ml-0 mb-4`} />
        <p css={tw`text-gray-700`}>
          <a href={`https://mobile.twitter.com/search?q=${twitterSearchParam}`}>
            Discuss this {type}
          </a>{' '}
          on twitter!
        </p>
      </footer>
    </Layout>
  );
};

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
`;

export default PostTemplate;
