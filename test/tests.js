"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("../index");
describe("Testing isIsogram", function () {
    it("Should return true if all given strings are isograms", function () {
        chai_1.assert.equal(index_1.isIsogram("Dermatoglyphics"), true);
        chai_1.assert.equal(index_1.isIsogram("isogram"), true);
        chai_1.assert.equal(index_1.isIsogram("aba"), false, "same chars may not be adjacent");
        chai_1.assert.equal(index_1.isIsogram("moOse"), false, "same chars may not be same case");
        chai_1.assert.equal(index_1.isIsogram("isIsogram"), false);
        chai_1.assert.equal(index_1.isIsogram(""), true, "an empty string is a valid isogram");
    });
});
describe("Testing endsWith", function () {
    it("Should test to see if left-side parameters end with left-side parameters", function () {
        chai_1.assert.equal(index_1.endsWith('abcde', 'cde'), true);
        chai_1.assert.equal(index_1.endsWith('abcde', 'abc'), false);
        chai_1.assert.equal(index_1.endsWith('abc', ''), true);
    });
});
