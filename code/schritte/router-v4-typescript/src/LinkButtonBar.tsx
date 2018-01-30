import * as React from "react";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";

interface LinkDescription {
  target: string;
  title: string;
}

interface LinkButtonBarProps extends RouteComponentProps<void> {
  links: [LinkDescription];
}

// This is a very poor example for withRouter HOC...
const LinkButtonBar = (props: LinkButtonBarProps) => {
  const {
    links, // comes from our 'own' properties, passed to LinkButtonBar
    history // added by withRouter HOC
  } = props;

  return (
    <div>
      {links.map(link => (
        <button key={link.target} onClick={() => history.push(link.target)}>
          {link.title}
        </button>
      ))}
    </div>
  );
};
// make sure LinkButtonBar receives the history (and others)
// from the Router
// (why can't we return an array in LinkButtonBar?
// seems to be a problem with the 'withRouter' types)
const WrappedLinkedButtonBar = withRouter(LinkButtonBar);

export default WrappedLinkedButtonBar;
