// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

var majorityElement = function (nums) { 
  const hash = {}
  const max = parseInt(nums.length / 2 + 1)
  let cur
  nums.some(v => {
    if (!hash[v]) {
      hash[v] = 1
    } else {
      hash[v]++;
    }
    if (hash[v] >= max) {
      cur = v
      return true
    }
  })
}

// const test = [1, 2, 3, 2, 2, 2, 5, 4, 2]
const test = [1,1,2,3]
console.log(majorityElement(test));