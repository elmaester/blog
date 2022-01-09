import { Link } from "gatsby";
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header className="header">
      <div className="set-global-width">
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </div>
    </header>
  );
};

export default Header;
