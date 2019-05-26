import React from "react";
import { act } from "react-dom/test-utils";
import GreetingDetail from "../src/GreetingDetail";
import GreetingController from "../src/GreetingController";
import { mount } from "enzyme";

// Test data
const someGreetings = [
  { id: 1, name: "Klaus", greeting: "Moin moin" },
  { id: 2, name: "Susi", greeting: "Hello!" }
];

// https://github.com/facebook/jest/issues/2157#issuecomment-279171856
function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

// Warning on missing 'act' call:
//    https://github.com/airbnb/enzyme/issues/2073
//    -> https://github.com/airbnb/enzyme/pull/2034

test("it should render greetings received from backend", () => {
  // 'fetchMock' see: https://www.npmjs.com/package/jest-fetch-mock#typescript-guide
  fetchMock.mockResponse(JSON.stringify(someGreetings), { status: 200 });
  // render the component we want to test
  const tree = mount(<GreetingController />);
  expect(fetch).toHaveBeenCalledWith("http://localhost:7000/greetings");
  expect(tree.find("tbody tr")).toHaveLength(0);

  return flushPromises().then(() => {
    tree.update();
    // very simple check to make sure at least the rows are rendered
    expect(tree.find("tbody tr")).toHaveLength(2);
  });
});

test("it should open detail view on button click", () => {
  fetchMock.mockResponse(JSON.stringify(someGreetings), { status: 200 });

  // mount the component into a real dom (implemented by JSDom)
  const component = mount(<GreetingController />);
  expect(fetch).toHaveBeenCalledWith("http://localhost:7000/greetings");

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
