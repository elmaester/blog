import * as React from "react";

const insertScript = (id, parentElement) => {
  const script = window.document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.id = id;
  let url = window.location.origin + window.location.pathname;
  if(url.endsWith("/")) {
    url = url.slice(0, -1);
  }
  script.innerHTML = `
    var remark_config = {
      host: "https://remark42.oleg.date",
      site_id: "blog",
      url: "${url}",
      theme: "dark",
      components: ["embed"],
    };
    !function(e,n){for(var o=0;o<e.length;o++){var r=n.createElement("script"),c=".js",d=n.head||n.body;"noModule"in r?(r.type="module",c=".mjs"):r.async=!0,r.defer=!0,r.src=remark_config.host+"/web/"+e[o]+c,d.appendChild(r)}}(remark_config.components||["embed"],document);`;
  parentElement.appendChild(script);
  return script;
};

const removeScript = (id, parentElement) => {
  const script = window.document.getElementById(id);
  if (script) {
    parentElement.removeChild(script);
  }
};

const manageScript = () => {
  // If there's no window there's nothing to do for us
  if (!window) {
    return;
  }
  const document = window.document;
  // In case our #remark42 container exists we can add our comments script
  if (document.getElementById("remark42")) {
    insertScript("comments-script", document.body);
  }

  // Cleanup when the component unmounts
  return () => removeScript("comments-script", document.body);
};

const Comments = ({ commentsId }) => {
  React.useEffect(manageScript, [commentsId]);
  React.useEffect(() => {
    if (!window) {
      return;
    }
    const remark42 = window.REMARK42;
    if (remark42) {
      remark42.destroy();
      remark42.createInstance(window.remark_config);
    }
  }, [commentsId]);

  return (
    <>
      <h2>Comments</h2>
      <div id="remark42"></div>
    </>
  );
};

export default Comments;
