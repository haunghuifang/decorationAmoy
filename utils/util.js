/**
 * 数字补0
 * @param {*} num
 */
function addZero(num) {
  if (typeof num === 'number') {
    return num < 10 ? '0' + num : num;
  }
  console.log("addZero param's type is not Number");
  return num;
}
/**
 * 格式化时间戳
 * @param {*} timeStamp
 * @param formatStr
 * @param unit 单位 1毫秒 1000秒
 */
function formatTime(timeStamp, formatStr = 'yyyy-MM-dd HH:mm:ss', unit = 1) {
  if (timeStamp) {
    // eslint-disable-next-line radix
    timeStamp = parseInt(timeStamp * unit);
    let date = new Date(timeStamp);
    let Y = date.getFullYear();
    let M = date.getMonth() + 1;
    let d = date.getDate();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    return formatStr
      .replace('yyyy', Y)
      .replace('MM', addZero(M))
      .replace('dd', addZero(d))
      .replace('HH', addZero(h))
      .replace('mm', addZero(m))
      .replace('ss', addZero(s));
  }
  return timeStamp;
}

module.exports = {
  formatTime: formatTime
};
