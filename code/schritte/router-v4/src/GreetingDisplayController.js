import React from "react";

const BACKEND_URL = "http://localhost:7000/greetings";

export default class GreetingDisplayController extends React.Component {
  componentDidMount() {
    this.loadGreeting(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.loadGreeting(nextProps);
  }

  loadGreeting(props) {
    const { match } = props;

    fetch(`${BACKEND_URL}/${match.params.greetingId}`)
      .then(response => response.json())
      .then(greeting => this.setState({ greeting }))
      .catch(error => console.log("FAILED TO LOAD GREETING:", error));
  }

  render() {
    if (!this.state) {
      return <h1>No Greeting loaded</h1>;
    }

    const { greeting } = this.state;

    // In a real-world, more complex example the rendering of the greeting would go to it's own dump component
    return (
      <h1>
        {greeting.greeting}, {greeting.name}
      </h1>
    );
  }
}
