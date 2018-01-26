import * as React from "react";
import GreetingMaster from "../src/GreetingMaster";
import * as renderer from "react-test-renderer";

import { shallow } from "enzyme";

const someGreetings = [{ id: 1, name: "Klaus", greeting: "Moin moin" }, { id: 2, name: "Susi", greeting: "Hello!" }];

test("it should render table with all greetings", () => {
  const onAddMock = jest.fn();
  const tree = renderer.create(<GreetingMaster greetings={someGreetings} onAdd={onAddMock} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("on click callback should work", () => {
  const onAddMock = jest.fn();
  const component = shallow(<GreetingMaster greetings={someGreetings} onAdd={onAddMock} />);

  // make sure it behaves correctly
  component.find("button").simulate("click");
  expect(onAddMock).toHaveBeenCalled();
});

// http://redux.js.org/docs/recipes/WritingTests.html
// https://github.com/adriantoine/enzyme-to-json
// https://medium.com/selleo/testing-react-components-best-practices-2f77ac302d12#.k3hji9cih
// createNodeMock: // https://github.com/facebook/react/issues/7740#issuecomment-247335106
