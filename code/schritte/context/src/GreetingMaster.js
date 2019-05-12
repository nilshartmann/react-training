import React from "react";
import { ThemeContext } from "./ThemeContext";

const GreetingMaster = props => {
  const { greetings, onAdd } = props;
  const body = greetings.map(greeting => (
    <tr key={greeting.id}>
      <td>{greeting.name}</td>
      <td>{greeting.greeting}</td>
    </tr>
  ));
  return (
    <ThemeContext.Consumer>
      {themeContext => {
        console.log(themeContext);
        return (
          <div className={themeContext.theme}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Greeting</th>
                </tr>
              </thead>
              <tbody>{body}</tbody>
            </table>
            <button onClick={onAdd}>Add</button>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default GreetingMaster;
