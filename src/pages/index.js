import * as React from "react";
import { graphql, Link } from "gatsby";
import "../styles/main.scss";
import Header from "../components/Header";

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
    date: node.frontmatter.date,
    title: node.frontmatter.title,
    slug: node.fields.slug,
    time: node.timeToRead,
  }));
  return (
    <>
      <Header />
      <main className="set-global-width blogroll">
        {posts.map((post) => (
          <Link to={`/${post.slug}`} className="blogroll-link">
            <span className="blogroll-link-date">{post.date}: </span>
            <span className="blogroll-link-title">
              {post.title}
              <span className="blogroll-link-time"> ({post.time} min)</span>
            </span>
          </Link>
        ))}
      </main>
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`;
