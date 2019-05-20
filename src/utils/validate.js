/**
 * !常用验证方式
 */

export function isvalidUsername (str) {
  let validMap = ['admin', 'editor']
  return validMap.indexOf(str.trim()) >= 0
}

// !合法URL
export function validateURL (textVal) {
  const urlRegex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlRegex.test(textVal)
}

// !小写字母
export function validateLowerCase (str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

// !大写字母
export function validateUpperCase (str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

// !大小写字母
export function validateAlphabets (str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

// !IP地址
export function validateIsIp (str) {
  const reg = /^(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|[1-9])(\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)){3}$/
  return reg.test(str)
}
