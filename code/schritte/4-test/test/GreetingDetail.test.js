import React from "react";
import GreetingDetail from "../src/GreetingDetail";
import renderer from "react-test-renderer";

// use "enzyme" as "prefix" in code below to make it more
// obvious where shallow comes from
import * as enzyme from "enzyme";

const exactlyOne = component => {
  expect(component).toHaveLength(1);
  return component;
};

const setup = () => {
  const onSaveMock = jest.fn();

  const component = enzyme.shallow(<GreetingDetail onSave={onSaveMock} />);

  const nameInput = () => exactlyOne(component.find('input[name="name"]'));
  const greetingInput = () => exactlyOne(component.find('input[name="greeting"]'));
  const addButton = () => exactlyOne(component.find('button[children="Save"]'));
  const clearButton = () => exactlyOne(component.find('button[children="Clear"]'));

  return {
    onSaveMock,
    component,
    elements: {
      nameInput,
      greetingInput,
      addButton,
      clearButton
    }
  };
};

const aGreeting = {
  name: "Susi",
  greeting: "Moin"
};

test("it should render fine", () => {
  const onSaveMock = jest.fn();
  // render the component we want to test
  const tree = renderer.create(<GreetingDetail onSave={onSaveMock} />).toJSON();

  // make sure the json matches the last stored snapshot
  // (saved on the filesystem in __snapshots__)
  expect(tree).toMatchSnapshot();
});

const changeEvent = (name, value) => ({
  target: { name, value }
});

test("enablement should work", () => {
  const onSaveMock = jest.fn();
  const greetingDetail = enzyme.shallow(<GreetingDetail onSave={onSaveMock} />);

  expect(greetingDetail.find('button[children="Save"]').prop("disabled")).toBe(true);

  greetingDetail.find('input[name="name"]').simulate("change", changeEvent("name", "Susi"));
  greetingDetail.find('input[name="greeting"]').simulate("change", changeEvent("greeting", "Hello"));

  expect(greetingDetail.find('button[children="Save"]').prop("disabled")).toBe(false);
});

test("onSave should be called with values from form", () => {
  const { onSaveMock, elements } = setup();

  elements.nameInput().simulate("change", { target: { name: "name", value: aGreeting.name } });
  // checking the state here might be too much in real live,
  // here just to demonstrate the Enzyme API

  elements.greetingInput().simulate("change", { target: { name: "greeting", value: aGreeting.greeting } });

  elements.addButton().simulate("click");
  expect(onSaveMock.mock.calls).toHaveLength(1);
  expect(onSaveMock.mock.calls[0][0]).toEqual(aGreeting);
});

test("onSave should be disabled and enabled", () => {
  const { elements } = setup();

  // should initialy be disabled
  expect(elements.addButton().prop("disabled")).toBe(true);

  // should be disabled if only name is entered
  elements.nameInput().simulate("change", { target: { name: "name", value: aGreeting.name } });
  expect(elements.addButton().prop("disabled")).toBe(true);

  // should be disabled if only greeting is enabled
  elements.nameInput().simulate("change", { target: { name: "name", value: null } });
  elements.greetingInput().simulate("change", { target: { name: "greeting", value: aGreeting.greeting } });
  expect(elements.addButton().prop("disabled")).toBe(true);

  // should be enabled if name and greeting is set
  // (btw note the imperative test code style vs the declarative react code style)
  elements.nameInput().simulate("change", { target: { name: "name", value: aGreeting.name } });
  expect(elements.addButton().prop("disabled")).toBe(false);
});

test("clear should clear the form", () => {
  const { component, elements } = setup();

  // enter
  elements.nameInput().simulate("change", { target: { name: "name", value: aGreeting.name } });
  elements.greetingInput().simulate("change", { target: { name: "greeting", value: aGreeting.greeting } });

  // just to make sure, state has a value before resetting
  expect(component.state("name")).toBe(aGreeting.name);
  expect(component.state("greeting")).toBe(aGreeting.greeting);

  // press clear button
  elements.clearButton().simulate("click");

  // make sure state has been reset correctly
  expect(component.state("name")).toBe("");
  expect(component.state("greeting")).toBe("");
});
