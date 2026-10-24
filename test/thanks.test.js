import { test } from "node:test";
import assert from "node:assert/strict";
import { thanks } from "../src/thanks.js";

test("thanks thanks the name", () => {
  assert.equal(thanks("Ada"), "Thanks, Ada!");
});

test("thanks falls back to friend for an empty name", () => {
  assert.equal(thanks(""), "Thanks, friend!");
});
