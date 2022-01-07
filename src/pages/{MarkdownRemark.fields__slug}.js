import React from "react";
import { graphql } from "gatsby";
import "../styles.scss";

export default function Template({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <main className="blog-post-container">
      <article className="blog-post">
        <h1 className="blog-post-title">{frontmatter.title}</h1>
        <time className="blog-post-date">Written {frontmatter.date}</time>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </main>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(fromNow: true)
        title
      }
    }
  }
`;
