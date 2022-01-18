import React from "react";
import { graphql } from "gatsby";
import "../styles/main.scss";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import Comments from "../components/Comments";
import PrevNextLink from "../components/PrevNextLink";
import SlowlyAvatar from "../images/slowly.png";

export default function BlogPost({ data, location, pageContext }) {
  const { frontmatter, html, excerpt } = data.markdownRemark;
  const { prev, next, slug } = pageContext;
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>
          {frontmatter.title} - {data.site.siteMetadata.title}
        </title>
        <meta name="description" content={excerpt} />
        <meta name="robots" content="index, nofollow" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta property="og:type" content="article" />
        <meta property="og:article:published_time" content={frontmatter.date} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={excerpt} />
        <meta
          property="og:url"
          content={data.site.siteMetadata.siteUrl + "/" + slug}
        />
        <meta property="og:site_name" content={data.site.siteMetadata.title} />
        <meta property="og:image" content={SlowlyAvatar} />
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
        <footer className="blog-post-prevnext">
          <PrevNextLink prevOrNext={"Previous"} obj={prev} />
          <PrevNextLink prevOrNext={"Next"} obj={next} />
        </footer>
        <Comments location={location.pathname} />
      </main>
    </>
  );
}

// FrontMatter: title, date, tags, related

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`;
