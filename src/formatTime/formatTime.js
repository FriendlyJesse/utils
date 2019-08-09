/**
 * 
 * @desc 格式化时间戳
 * @param  {Number} Timestamp(ms)
 * @return {String}
 */
export function formatTime(Timestamp) {
  let date = new Date(Timestamp)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hours = date.getHours()
  let minu = date.getMinutes()
  let second = date.getSeconds()

  //判断是否满10
  let arr = [month, day, hours, minu, second]
  arr.forEach(item => {
    item < 10 ? "0" + item : item
  })
  return year + '-' + arr[0] + '-' + arr[1] + ' ' + arr[2] + ':' + arr[3] + ':' + arr[4]
}