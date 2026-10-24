import { test } from "node:test";
import assert from "node:assert/strict";
import { goodbye } from "../src/goodbye.js";

test("goodbye says goodbye to the name", () => {
  assert.equal(goodbye("Ada"), "Goodbye, Ada!");
});

test("goodbye with an empty name interpolates to just the punctuation", () => {
  assert.equal(goodbye(""), "Goodbye, !");
});

test("goodbye is exported as a named export of the module", async () => {
  const module = await import("../src/goodbye.js");
  assert.equal(typeof module.goodbye, "function");
});
