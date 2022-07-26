import { Link } from "gatsby";
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import RssLogo from "../images/rss.png";
import TelegramLogo from "../images/telegram.png";
import TwitterLogo from "../images/twitter.png";

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
        <a href="https://twitter.com/oleg_date" className="header-social-link-first">
          <img src={TwitterLogo} alt="twitter" width="36" height="36" />
        </a>
        <a href="https://t.me/+ExSBktJktPU5NzQy" className="header-social-link">
          <img src={TelegramLogo} alt="telegram" width="36" height="36" />
        </a>
        <a href="/rss" className="header-social-link">
          <img src={RssLogo} alt="rss" width="36" height="36" />
        </a>
      </div>
    </header>
  );
};

export default Header;
