import React from "react";
import PropTypes from "prop-types";

class GreetingMaster extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGreetings: []
    };
  }

  render() {
    // onClick={() => onDelete(greeting.id)}
    const { greetings, onAdd, onDelete } = this.props;
    const selectedGreetings = this.state.selectedGreetings;
    const body = greetings.map(greeting => (
      <tr key={greeting.id}>
        <td>
          <input
            type="checkbox"
            checked={selectedGreetings.includes(greeting.id)}
            onChange={e => {
              if (e.target.checked === true) {
                this.setState({
                  selectedGreetings: [...selectedGreetings, greeting.id]
                });
              } else {
                this.setState({
                  selectedGreetings: selectedGreetings.filter(id => id !== greeting.id)
                });
              }
            }}
          />
        </td>
        <td>{greeting.name}</td>
        <td>{greeting.greeting}</td>
      </tr>
    ));
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th />
              <th>Name</th>
              <th>Greeting</th>
            </tr>
          </thead>
          <tbody>{body}</tbody>
        </table>
        <button onClick={onAdd}>Add</button>
        <button disabled={selectedGreetings.length === 0} onClick={() => onDelete(selectedGreetings)}>
          Delete
        </button>
      </div>
    );
  }
}

GreetingMaster.propTypes = {
  greetings: PropTypes.array.isRequired,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func
};

export default GreetingMaster;
