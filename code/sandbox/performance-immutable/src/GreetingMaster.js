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

  // 1A: Einfach React.PureComponent verwenden

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

// 2. OPTIMIERUNG:
// GreetingRow mit React.memo wrappen, damit GreetingRow PureComponent wird

const GreetingRow = ({ greeting }) => {
  return (
    <tr key={greeting.id}>
      <td>{greeting.id}</td>
      <td>{greeting.name}</td>
      <td>{greeting.greeting}</td>
    </tr>
  );
};
