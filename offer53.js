var findRightIndex = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  while(left <= right) {
    const mid = parseInt((left+right) / 2)
    if(nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}

const tmp = findRightIndex([2, 2, 3, 3, 3, 4], 1)
console.log(tmp)

function search(nums, target) {
  let len = nums.length
  if (!len) {
    return 0
  }
  if (len === 1) {
    return nums[0] === target ? 1 : 0
  }

  let left = 0
  let right = len - 1
  let count = 0
  while (left < right) {
    const mid = parseInt((left + right) / 2 + 1)
    if (mid > target) {
      right = mid - 1
    } else if(mid < target ){
      left = mid + 1
    } else {
      count++
    }
  }

  return count
}