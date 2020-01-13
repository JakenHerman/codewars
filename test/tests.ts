import { assert } from "chai";
import { isIsogram } from "../index";

describe("Testing isIsogram", () => {
  it("Should return true if all given strings are isograms", () => {
    assert.equal(isIsogram("Dermatoglyphics"), true);
    assert.equal( isIsogram("isogram"), true );
    assert.equal( isIsogram("aba"), false, "same chars may not be adjacent" );
    assert.equal( isIsogram("moOse"), false, "same chars may not be same case" );
    assert.equal( isIsogram("isIsogram"), false );
    assert.equal( isIsogram(""), true, "an empty string is a valid isogram" );
  });
});