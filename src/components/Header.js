import { Link } from "gatsby";
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import RssLogo from "../images/rss.png";
import TelegramLogo from "../images/telegram.png";

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
        <a href="https://t.me/+ExSBktJktPU5NzQy" className="header-first-icon">
          <img src={TelegramLogo} alt="telegram" />
        </a>
        <a href="/rss.xml">
          <img src={RssLogo} alt="rss" />
        </a>
      </div>
    </header>
  );
};

export default Header;
