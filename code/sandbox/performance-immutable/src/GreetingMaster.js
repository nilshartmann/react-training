import React from "react";

export default class GreetingMaster extends React.Component {
  // 1. OPTIMIERUNG:
  // TABELLE NUR RENDERN, WENN SICH DER INHALT GEÄNDERT HAT

  // shouldComponentUpdate(nextProps) {
  //   return nextProps.greetings !== this.props.greetings;
  // }
  // componentDidUpdate() {
  //   console.log("Greeting Master Updated with " + this.props.greetings.length + "  Greetings");
  // }

  render() {
    const { greetings } = this.props;

    const body = greetings.map(greeting => <GreetingRow key={greeting.id} greeting={greeting} />);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Greeting</th>
            </tr>
          </thead>
          <tbody>{body}</tbody>
        </table>
      </div>
    );
  }
}

class GreetingRow extends React.Component {
  // 2. OPTIMIERUNG: NUR NEU RENDERN, WENN SICH EINE ZEILE GEÄNDERT HAT
  // shouldComponentUpdate(nextProps) {
  //   const scu = nextProps.greeting !== this.props.greeting;
  //   return scu;
  // }

  render() {
    const { greeting } = this.props;

    return (
      <tr key={greeting.id}>
        <td>{greeting.id}</td>
        <td>{greeting.name}</td>
        <td>{greeting.greeting}</td>
      </tr>
    );
  }
}
