import React from "react";
import GreetingMaster from "../src/GreetingMaster";
import renderer from "react-test-renderer";

import { shallow } from "enzyme";

const someGreetings = [{ id: 1, name: "Klaus", greeting: "Moin moin" }, { id: 2, name: "Susi", greeting: "Hello!" }];

test("it should render table with all greetings", () => {
  const onAddMock = jest.fn();

  // TODO: Lasse mit dem react-test-renderer den GreetingMaster rendern
  //       Für das onAdd-Property kannst Du die Mock-Funktion onAddMock übergeben
  //       Für die Greetings kannst Du 'someGreetings' verwenden

  const tree = null; // hier react-test-renderer verwenden, um GreetingMaster zu rendern
  expect(tree.toJSON()).toMatchSnapshot();

  // TODO 2: Was passiert, wenn du nach erfolgreichem ersten Test den GreetingMaster
  //         veränderst und den Test erneut ausführst?
});

test("on click callback should work", () => {
  const onAddMock = jest.fn();
  const component = shallow(<GreetingMaster greetings={someGreetings} onAdd={onAddMock} />);

  // TODO:
  //   1. suche den onAdd-Button in der gerenderten Komponente
  //   2. Führe auf dem Button einen click aus

  //   (Danach sollte die folgende expectation erfolgreich sein:)
  expect(onAddMock).toHaveBeenCalled();
});
