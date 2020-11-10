import { Selector } from "testcafe";
import { screen } from "@testing-library/testcafe";
fixture`App Browser Test`.page`http://localhost:3000`;

test("Entering new Blog Post", async t => {
  // Open Post-Editor
  await t.click("*[aria-label='Add Post']");

  // Material UI Components hard to find by "meaningful" attributes,
  // use IDs instead

  const clearButton = screen.getByRole("button", { name: "Clear" });
  const saveButton = screen.getByRole("button", { name: "Save Post" });

  const titleField = screen.getByLabelText("Title");
  const bodyField = screen.getByLabelText("Body");

  // Make sure, Buttons are disabled
  await t.expect(clearButton.hasAttribute("disabled")).ok();
  await t.expect(saveButton.hasAttribute("disabled")).ok();

  await t.typeText(titleField, "Learning React");
  await t.expect(titleField.value).eql("Learning React");

  // check button enablement
  await t.expect(clearButton.hasAttribute("disabled")).notOk();
  await t.expect(saveButton.hasAttribute("disabled")).ok();

  // Enter Body
  await t.typeText("#bodyField", "Lorem ipsum tralala");
  await t.expect(clearButton.hasAttribute("disabled")).notOk();
  await t.expect(saveButton.hasAttribute("disabled")).notOk();

  // Press clear
  await t.click(clearButton);
  await t.expect(titleField.value).eql("");
  await t.expect(bodyField.value).eql("");

  // Re-Enter
  await t.typeText(titleField, "Learning Testcafe");
  await t.typeText(
    bodyField,
    "Let's see, how tests are implemented with testcafe, a Browser testing tool"
  );

  // Press Save
  await t.click(saveButton);

  // App should be on Frontpage again, Post should be visible
  await t.expect(Selector("h2").withText("Learning Testcafe").count).ok();
});
