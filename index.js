"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIsogram = function (str) { return new Set(str.toLowerCase().split('')).size === str.length; };
