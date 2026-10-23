import { test } from "node:test";
import assert from "node:assert/strict";
import { goodbye } from "../src/goodbye.js";

test("goodbye says goodbye to the name", () => {
  assert.equal(goodbye("Ada"), "Goodbye, Ada!");
});

test("goodbye interpolates names with punctuation and whitespace verbatim", () => {
  assert.equal(goodbye("Ada Lovelace"), "Goodbye, Ada Lovelace!");
  assert.equal(goodbye("  Bob  "), "Goodbye,   Bob  !");
  assert.equal(goodbye("Mr. T"), "Goodbye, Mr. T!");
});
