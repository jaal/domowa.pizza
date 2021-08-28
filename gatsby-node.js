const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const slugify = require('slug')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postsPerPage = 15
  const categories = []
  const tags = []

  const templates = {
    templateCategory: "./src/templates/categories.js",
    templateTag: "./src/templates/tags.js",
    templateList: "./src/templates/index.js",
    templateArticle: "./src/templates/blog-post.js",
  }

  const posts = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 9999
        ) {
          edges {
            node {
              fields {
                slug
                tags
                categories
              }
              frontmatter {
                tags
                categories
              }
            }
          }
        }
      }
    `
  )

  if (posts.data) {
    posts.data.allMarkdownRemark.edges.forEach((post, index) => {
      if (templates.templateArticle) {
        const next = index === posts.data.allMarkdownRemark.edges.length - 1 ? null : posts.data.allMarkdownRemark.edges[index + 1].node
        const previous = index === 0 ? null : posts.data.allMarkdownRemark.edges[index - 1].node

        createPage({
          path: post.node.fields.slug,
          component: path.resolve(templates.templateArticle),
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
          }
        })
      }

      distinct(post, categories, "categories")
      distinct(post, tags, "tags")
    })

    if (templates.templateList) {
      const numPages = Math.ceil(posts.data.allMarkdownRemark.edges.length / postsPerPage)

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/` : `/${i + 1}`,
          component: path.resolve(templates.templateList),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            pages: numPages,
            current: i + 1,
            slug: templates.slug
          }
        })
      })
    }

    if (templates.templateCategory) {
      groupify(categories, "category", path.resolve(templates.templateCategory), postsPerPage, createPage)
    }

    if (templates.templateTag) {
      groupify(tags, "tag", path.resolve(templates.templateTag), postsPerPage, createPage)
    }
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const { createNodeField } = actions
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value
    })

    createNodeField({
      name: `categories`,
      node,
      value: categorify(node.frontmatter.categories)
    })

    createNodeField({
      name: `tags`,
      node,
      value: categorify(node.frontmatter.tags)
    })
  }
}



function categorify(elements) {
  const result = []

  if (elements) {
    if (elements instanceof Array) {
      elements.forEach((element) => {
        result.push(element)
      })
    } else {
      result.push(elements)
    }
  }

  return result
}

function groupify(categories, name, path, postsPerPage, createPage) {
  Object.keys(categories).forEach((category) => {
    const c = slugify(category, { lower: true })
    const length = Math.ceil(categories[category].length / postsPerPage)

    Array.from({ length: length }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/${name}/${c}` : `/${name}/${c}/${i + 1}`,
        component: path,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          pages: length,
          current: i + 1,
          slug: c,
          name: category,
          sub: name
        }
      })
    })
  })
}

function distinct(post, categories, key) {
  if (post.node.frontmatter[key] instanceof Array) {
    post.node.frontmatter[key].forEach((category) => {
      if (!(category in categories)) {
        categories[category] = []
      }

      categories[category].push(post)
    })
  } else {
    if (!(post.node.frontmatter[key] in categories)) {
      categories[post.node.frontmatter[key]] = []
    }

    categories[post.node.frontmatter[key]].push(post)
  }
}
