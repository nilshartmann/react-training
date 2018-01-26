import { assert } from "chai";

import { resetGreeting, RESET_GREETING, UPDATE_GREETING } from "../src/greeting/actions";

describe("actions", () => {
  it("reset greetings has proper type", () => {
    const action = resetGreeting();
    assert(action.type === RESET_GREETING, "aha2");
  });
  it("soso", () => {
    assert(5 == 5, "aha2");
  });
});
