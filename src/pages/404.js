import * as React from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import Header from "../components/Header";

const NotFoundPage = ({ data }) => {
  return (
    <>
      <Helmet>
        <title>Not found - {data.site.siteMetadata.title}</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Helmet>
      <Header />
      <main className="set-global-width blog-post">
        <h1>Page not found</h1>
        <p>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          We couldn’t find what you were looking for.
        </p>
        <br />
        <Link to="/">Go home</Link>
      </main>
    </>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
