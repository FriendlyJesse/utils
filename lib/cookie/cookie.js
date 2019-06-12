"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCookie = getCookie;
exports.setCookie = setCookie;
exports.removeCookie = removeCookie;

/**
 * 
 * @desc 根据`name`读取cookie
 * @param  {String} name 
 * @return {String}
 */
function getCookie(name) {
  var arr = document.cookie.replace(/\s/g, "").split(';');

  for (var i = 0; i < arr.length; i++) {
    var tempArr = arr[i].split('=');

    if (tempArr[0] == name) {
      return decodeURIComponent(tempArr[1]);
    }
  }

  return '';
}
/**
 * 
 * @desc  设置Cookie
 * @param {String} name 
 * @param {String} value 
 * @param {Number} days 
 */


function setCookie(name, value, days) {
  var date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = name + '=' + value + ';expires=' + date;
}
/**
 * 
 * @desc 根据`name`删除cookie
 * @param  {String} name 
 */


function removeCookie(name) {
  // 设置已过期，系统会立刻删除cookie
  setCookie(name, '1', -1);
}