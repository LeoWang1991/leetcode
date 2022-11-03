// 把数组排成最小的数
// sort排序

const minNumber = function(nums) {
  const getSum = (sum, n2) => {
    return `${sum}${n2}` > `${n2}${sum}` ? `${n2}${sum}` : `${sum}${n2}`
  } 
  const tmp = nums.sort((a,b) => a - b)
  return tmp.reduce(getSum)
}

const tmp = minNumber([3,1,1,2])
console.log(tmp)