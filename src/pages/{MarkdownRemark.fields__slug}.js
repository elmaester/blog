import React from "react";
import { graphql } from "gatsby";
import "../styles/main.scss";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import Comments from "../components/Comments";

export default function Template({ data, location }) {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <>
      <Helmet>
        <title>
          {frontmatter.title} - {data.site.siteMetadata.title}
        </title>
      </Helmet>
      <Header />
      <main className="set-global-width">
        <article className="blog-post">
          <h1 className="blog-post-title">{frontmatter.title}</h1>
          <time className="blog-post-date">
            First published on {frontmatter.date}
          </time>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
        <Comments location={location.pathname} />
      </main>
    </>
  );
}

// FrontMatter: title, date, tags, related

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
