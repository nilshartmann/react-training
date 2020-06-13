import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

type LinkDescription = {
  target: string;
  title: string;
};

type LinkButtonBarProps = RouteComponentProps<{}> & {
  links: LinkDescription[];
};

// This is a very poor example for withRouter HOC...
function LinkButtonBar(props: LinkButtonBarProps) {
  const {
    links, // comes from our 'own' properties, passed to LinkButtonBar
    history // added by withRouter HOC
  } = props;

  // note: due to wrong type defs, we cannot return an array here,
  // but must return a single element
  return (
    <>
      {links.map(link => (
        <button key={link.target} onClick={() => history.push(link.target)}>
          {link.title}
        </button>
      ))}
    </>
  );
}

// make sure LinkButtonBar receives the history (and others)
// from the Router
export default withRouter(LinkButtonBar);
