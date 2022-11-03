// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
// 输入[1,2,3,4] 输出[1,3,2,4]

/**
 * 1. 常规就空数组 遍历一遍把奇数splice插入到前面，偶数push到后面
 * 2. 在原数组上操作 双指针思路 left right，前面如果是偶数 后面是奇数 则交互
 */

var exchange = function (nums) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    // 奇数的话直接进到
    while (left < right && nums[left] % 2 == 1) {
      left++
    }
    while (left < right && nums[right] % 2 == 0) {
      right--
    }

    const tmp = nums[left]
    nums[left] = nums[right]
    nums[right] = tmp
  }

  return nums
}

console.log(exchange([1,2,3,4]))