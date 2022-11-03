// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]] 输出：[1,2,3,6,9,8,7,4,5]
/**
 * [
 *  [1,2,3,1,2,5]
 *  [4,5,6,3,4,1]
 *  [7,8,9,5,6,33]
 *  [7,8,9,5,6,34]
 *  [7,8,9,5,6,34]
 * ]
 */

var spiralOrder = function (matrix) {
  const result = []
  // value = matrix[top][left]
  let top = 0
  let bottom = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1
  let i = 0
  let x = 0


  while (true) {
    // 从左到右
    for (i = left; i <= right; i++) {
      result[x++] = matrix[top][i]
    }
    if (++top > bottom) {
      break
    } 

    // 从上到下
    for (i = top; i <= bottom; i++) {
      result[x++] = matrix[i][right]
    }
    if (--right < left) {
      break
    }
    
    // 从右到左
    for (i = right; i >= left; i--) {
      result[x++] = matrix[bottom][i]
    }
    if (--bottom < top) {
      break
    }
    
    // 从下到上
    for (i = bottom; i >= top; i--) {
      result[x++] = matrix[i][left]
    }
    if (++left > right) {
      break
    }
  }
  return result
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));