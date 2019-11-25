import React from "react";

export default function useTitle(title) {
  React.useEffect(() => {
    console.log("set title to " + title);
    window.document.title = `React Blog - ${title}`;
  }, [title]);
}
