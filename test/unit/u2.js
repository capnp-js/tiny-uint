/* @flow */

import * as assert from "assert";
import { describe, it } from "mocha";

import { u2_mask } from "../../src/u2";

describe("u2_mask", function () {
  it("masks 0 to 0", function () {
    assert.equal(u2_mask(0x00, 0x00), 0x00);
    assert.equal(u2_mask(0x00, 0x01), 0x00);
    assert.equal(u2_mask(0x00, 0x02), 0x00);
    assert.equal(u2_mask(0x00, 0x03), 0x00);
  });

  it("masks 1 correctly", function () {
    assert.equal(u2_mask(0x01, 0x00), 0x00);
    assert.equal(u2_mask(0x01, 0x01), 0x01);
    assert.equal(u2_mask(0x01, 0x02), 0x00);
    assert.equal(u2_mask(0x01, 0x03), 0x01);
  });

  it("masks 2 correctly", function () {
    assert.equal(u2_mask(0x02, 0x00), 0x00);
    assert.equal(u2_mask(0x02, 0x01), 0x00);
    assert.equal(u2_mask(0x02, 0x02), 0x02);
    assert.equal(u2_mask(0x02, 0x03), 0x02);
  });

  it("masks 3 correctly", function () {
    assert.equal(u2_mask(0x03, 0x00), 0x00);
    assert.equal(u2_mask(0x03, 0x01), 0x01);
    assert.equal(u2_mask(0x03, 0x02), 0x02);
    assert.equal(u2_mask(0x03, 0x03), 0x03);
  });
});
