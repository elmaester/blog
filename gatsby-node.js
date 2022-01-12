const path = require("path");

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md");

    actions.createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages =  async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/BlogPost.js')
  const res = await graphql(`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `)
  const posts = res.data.allMarkdownRemark.edges
  posts.forEach(({ node }, index) => {
     createPage({
        component: blogTemplate,
        path: `/${node.fields.slug}`,
        context: {
           slug: node.fields.slug,
           prev: index === 0 ? null : posts[index - 1].node,
           next: index === posts.length - 1 ? null : posts[index + 1].node
        }
     })
  })
}