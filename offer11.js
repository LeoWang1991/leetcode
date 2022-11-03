// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为 1。
// 注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。
// numbers = [3,4,5,1,2] => 1
// 作者：画手大鹏
// 链接：https://leetcode.cn/leetbook/read/illustrate-lcof/55wprc/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

/**
 * 因为数组是两段顺序排序的数组 所以通过二分方式来查找
 */

var minArrary = function (numbers) {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    const mid = parseInt((left + right) / 2)
    if (numbers[mid] < numbers[right]) {
      right = mid
    } else if (numbers[mid] > numbers[right]) {
      left = mid + 1
    } else {
      right--
    }
  }

  return numbers[left]
}

console.log(minArrary([1,3,3]))
