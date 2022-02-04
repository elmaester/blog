import * as React from "react";
import { graphql, Link } from "gatsby";
import "../styles/main.scss";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import { getTotalTimeToReadString } from "../functions";
import SlowlyAvatar from "../images/slowly.png";

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
    date: node.frontmatter.date,
    title: node.frontmatter.title,
    slug: node.fields.slug,
    time: node.timeToRead,
  }));
  const totalTime = posts.map((p) => p.time).reduce((acc, cur) => acc + cur);
  const totalTimeString = getTotalTimeToReadString(totalTime, posts.length);
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="bbrKWw5sI39u-BzDyEKTUwX73_9acZAUMGNX7waYKKI"
        />
        <meta name="yandex-verification" content="75fa6cf7dad7c161" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta
          property="og:description"
          content={data.site.siteMetadata.description}
        />
        <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
        <meta property="og:site_name" content={data.site.siteMetadata.title} />
        <meta property="og:image" content={SlowlyAvatar} />
      </Helmet>
      <Header />
      <main className="set-global-width blogroll">
        <p className="total-time-to-read">
          {totalTimeString.intro}
          <span>{totalTimeString.value}</span>
        </p>
        {posts.map((post) => (
          <Link to={`/${post.slug}`} className="blogroll-link" key={post.slug}>
            <time className="blogroll-link-date">{post.date}: </time>
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
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
