import React from "react";
import useInput from "../src/useInput";
import * as enzyme from "enzyme";

function UseInputTest() {
  const [customerInput, resetCustomer] = useInput("Customer", "kunde");

  return (
    <>
      <input {...customerInput} />
      <button name="reset" onClick={resetCustomer} />
      </>
  );
}

test("custom hook should work", () => {
  const component = enzyme.shallow(<UseInputTest />);

  const customerInput = () => component.find('input[name="customer"]');
  const resetButton = () => component.find('button[name="reset"]');

  expect(customerInput()).toHaveLength(1);
  expect(customerInput().props().value).toBe("kunde");

  customerInput().simulate("change", { target: { name: "name", value: "Anderer Kunde" } });
  expect(customerInput().props().value).toBe("Anderer Kunde");

  resetButton().simulate("click");
  expect(customerInput().props().value).toBe("");
});
