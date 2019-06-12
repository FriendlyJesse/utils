"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isArr = void 0;

var _data = require("./data/data");

var isArr = function isArr(someVar) {
  return Object.prototype.toString.call(someVar).slice(8, -1).toLowerCase() === 'array';
};

exports.isArr = isArr;
var _default = {
  formatPassTime: _data.formatPassTime
};
exports["default"] = _default;