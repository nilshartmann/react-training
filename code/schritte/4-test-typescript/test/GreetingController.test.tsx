import * as React from "react";
import GreetingDetail from "../src/GreetingDetail";
import GreetingController from "../src/GreetingController";
import * as renderer from "react-test-renderer";
import { mount } from "enzyme";
import { Promise } from "es6-promise";

// Test data
const someGreetings = [{ id: 1, name: "Klaus", greeting: "Moin moin" }, { id: 2, name: "Susi", greeting: "Hello!" }];

// https://github.com/facebook/jest/issues/2157#issuecomment-279171856
function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

test("it should render greetings received from backend", () => {
  (fetch as any).mockResponse(JSON.stringify(someGreetings), { status: 200 });
  // render the component we want to test
  const tree = mount(<GreetingController />);

  return flushPromises().then(() => {
    tree.update();
    // very simple check to make sure at least the rows are rendered
    expect(tree.find("tbody tr")).toHaveLength(2);
  });
});

test("it should open detail view on button click", () => {
  (fetch as any).mockResponse(JSON.stringify(someGreetings), { status: 200 });

  // mount the component into a real dom (implemented by JSDom)
  const component = mount(<GreetingController />);

  return flushPromises().then(() => {
    component.update();
    // on initial render the list with greetings (GreetingMaster)
    // is visible but no GreetingDetail
    expect(component.find(GreetingDetail)).toHaveLength(0);

    // find the "add" Button...
    const addButton = component.find("button");

    // click on the button
    addButton.simulate("click");

    // now the GreetingDetail should be visible
    expect(component.find(GreetingDetail)).toHaveLength(1);
  });
});
