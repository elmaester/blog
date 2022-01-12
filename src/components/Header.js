import { Link } from "gatsby";
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import RssLogo from "../images/rss.png";

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
      <div className="set-global-width header-inner">
        <Link to="/" className="header-homepage-link">
          {data.site.siteMetadata.title}
        </Link>
        <a href="/rss.xml">
          <img src={RssLogo} alt="rss" />
        </a>
      </div>
    </header>
  );
};

export default Header;
