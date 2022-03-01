import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PostEditor from "../PostEditor";

// TODO: Write a test for the PostEditor component:

// test("Test PostEditor", () => { /* your test code here */ })

// 1. Testcase:
//    - Render the PostEditor (pass a mock function as 'onSavePost' property)
//      const onSavePostMockFn = jest.fn();
//    - Find the title and body input field (for example by their label)
//    - fill both input fields with a value
//    - find and click on the save button
//    - expect that the mock function you used is invoked
//
//    Optional:
//    - make sure save button is only enabled if *both* input fields contain texts
//    - make sure the parameter passed to your mock function is actually correct
//      (should be an object with title and body property that contains your input:
//       { title: "Title from input field", body: "Body from input field"}
