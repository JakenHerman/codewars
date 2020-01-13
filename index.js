"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check if a string is an isogram or not
 * @param str The string to test
 */
exports.isIsogram = function (str) { return new Set(str.toLowerCase().split('')).size === str.length; };
