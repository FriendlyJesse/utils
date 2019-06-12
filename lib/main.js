"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _object = require("./object/object");

Object.keys(_object).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _object[key];
    }
  });
});

var _array = require("./array/array");

Object.keys(_array).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _array[key];
    }
  });
});

var _regexp = require("./regexp/regexp");

Object.keys(_regexp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _regexp[key];
    }
  });
});

var _cookie = require("./cookie/cookie");

Object.keys(_cookie).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cookie[key];
    }
  });
});

var _os = require("./os/os");

Object.keys(_os).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _os[key];
    }
  });
});