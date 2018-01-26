import React from "react";
import PropTypes from "prop-types";
/**
 * Im echten Leben wuerde der GreetingEditor wohl auch den "Update"-Button
 * enhalten und nur nach dem Ausloesen des Buttons ein Callback mit den
 * aktuellen Eingaben aufrufen.
 *
 * Um die Performance-Probleme zu demonstrieren, ist das hier extra "falsch"
 * gemacht
 */
export default class GreetingEditor extends React.Component {
  render() {
    const { id, greeting } = this.props;
    return (
      <div>
        <input onChange={event => this.inputChange(event)} name="id" value={id} placeholder="Id" />
        <input onChange={event => this.inputChange(event)} name="greeting" value={greeting} placeholder="Greeting" />
      </div>
    );
  }

  inputChange(event) {
    const { onInputChange } = this.props;

    const id = event.target.name === "id" ? event.target.value : this.props.id;
    const greeting = event.target.name === "greeting" ? event.target.value : this.props.greeting;

    onInputChange(id, greeting);
  }
}
