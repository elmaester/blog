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
