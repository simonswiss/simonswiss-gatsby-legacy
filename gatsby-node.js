const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// gatsby-node.js
const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope')
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMdx {
            edges {
              node {
                parent {
                  ... on File {
                    sourceInstanceName
                  }
                }
                id
                frontmatter {
                  path
                }
                code {
                  scope
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        // Create blog posts pages.
        result.data.allMdx.edges.forEach(({ node }) => {
          const type = node.parent.sourceInstanceName
          createPage({
            path: `/${type}/${node.frontmatter.path}`,
            component: componentWithMDXScope(
              path.resolve(`./src/templates/posts.js`),
              node.code.scope
            ),
            context: { id: node.id },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateBabelConfig = ({ actions: { setBabelPlugin } }) => {
  setBabelPlugin({
    name: 'babel-plugin-tailwind-components',
    options: {
      config: './tailwind.js',
      format: 'auto',
    },
  })
}

// gatsby-node.js
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
