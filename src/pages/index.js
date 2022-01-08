import * as React from "react";
import { graphql, Link } from "gatsby";
import "../styles/main.scss";
import Header from "../components/Header";

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
    date: node.frontmatter.date,
    title: node.frontmatter.title,
    slug: node.fields.slug,
  }));
  return (
    <>
    <Header />
    <main className="set-global-width">
      {posts.map((post) => (
        <Link to={`/${post.slug}`}>
          {post.date}: {post.title}
        </Link>
      ))}
    </main>
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
