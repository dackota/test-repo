import { test } from "node:test";
import assert from "node:assert/strict";
import { welcome } from "../src/welcome.js";

test("welcome greets the name", () => {
  assert.equal(welcome("Ada"), "Welcome, Ada!");
});

test("welcome greets an empty name as a friend", () => {
  assert.equal(welcome(""), "Welcome, friend!");
});
