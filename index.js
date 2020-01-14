"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check if a string is an isogram or not
 * @param str The string to test
 */
exports.isIsogram = function (str) { return new Set(str.toLowerCase().split('')).size === str.length; };
/**
 * Check to see if a string ends with another supplied string
 * @param s Full string to check
 * @param e Potential ending of string {s}
 */
exports.endsWith = function (s, e) { return s.slice(s.length - e.length).toString() === e; };
