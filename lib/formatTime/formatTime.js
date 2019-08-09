"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTime = formatTime;

/**
 * 
 * @desc 格式化时间戳
 * @param  {Number} Timestamp(ms)
 * @return {String}
 */
function formatTime(Timestamp) {
  var date = new Date(Timestamp);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours();
  var minu = date.getMinutes();
  var second = date.getSeconds(); //判断是否满10

  var arr = [month, day, hours, minu, second];
  arr.forEach(function (item) {
    item < 10 ? "0" + item : item;
  });
  return year + '-' + arr[0] + '-' + arr[1] + ' ' + arr[2] + ':' + arr[3] + ':' + arr[4];
}