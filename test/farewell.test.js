import { test } from "node:test";
import assert from "node:assert/strict";
import { farewell } from "../src/farewell.js";

test("farewell says goodbye to the name", () => {
  assert.equal(farewell("Ada"), "Goodbye, Ada!");
});

test("farewell says goodbye to a friend when no name is given", () => {
  assert.equal(farewell(""), "Goodbye, friend!");
});
