import { test } from "node:test";
import assert from "node:assert/strict";
import { farewell } from "../src/farewell.js";

test("farewell says goodbye to the name", () => {
  assert.equal(farewell("Ada"), "Goodbye, Ada!");
});

test("farewell greets an empty name as friend", () => {
  assert.equal(farewell(""), "Goodbye, friend!");
});
