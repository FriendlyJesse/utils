"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayEqual = arrayEqual;
exports.arrayClassify = arrayClassify;

/**
 * 
 * @desc 判断两个数组是否相等
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @return {Boolean}
 */
function arrayEqual(arr1, arr2) {
  if (arr1 === arr2) return true;
  if (arr1.length != arr2.length) return false;

  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}
/**
 * 
 * @desc 根据`id`给数组分类
 * @param {Array} arr
 * @param {String|Number|Boolean} id
 * @return {Array}
 */


function arrayClassify(arr, id) {
  var mp = {};
  var ret = [];
  arr.forEach(function (item) {
    if (typeof mp[id] === "number") {
      ret[mp[id]].push(item);
    } else {
      mp[id] = ret.length;
      ret.push([item]);
    }
  });
  return ret;
}