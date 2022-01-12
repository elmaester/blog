import { Link } from "gatsby";
import * as React from "react";

const PrevNextLink = ({ prevOrNext, obj }) => {
  if (obj === null) return <div />;
  const getValue = (target) => {
    if (target === "slug") return obj.fields.slug;
    if (target === "title") return obj.frontmatter.title;
  };
  return (
    <div>
      <p>{prevOrNext}:</p>
      <Link to={`/${getValue("slug")}`}>{getValue("title")}</Link>
    </div>
  );
};

export default PrevNextLink;
