// 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
// 输入n=1 输出 [1,2,3,4,5,6,7,8,9]
// 输入n=3 输出 [1,2,3,4,5,6,7,8,9...999]

/**
 * 用字符串处理大数问题
 */
console.time('start')





var printNumbers = function (n) {
  return new Array(Math.pow(10, n) - 1).fill(0).map((_, index) => index + 1)
}

printNumbers(7)
console.timeEnd('start')