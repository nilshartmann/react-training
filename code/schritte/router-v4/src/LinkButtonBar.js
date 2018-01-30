import React from "react";
import { withRouter } from "react-router-dom";

// This is a very poor example for withRouter HOC...
const LinkButtonBar = props => {
  const {
    links, // comes from our 'own' properties, passed to LinkButtonBar
    history // added by withRouter HOC
  } = props;

  return links.map(link => (
    <button key={link.target} onClick={() => history.push(link.target)}>
      {link.title}
    </button>
  ));
};

// make sure LinkButtonBar receives the history (and others)
// from the Router
const WrappedLinkedButtonBar = withRouter(LinkButtonBar);

export default WrappedLinkedButtonBar;
