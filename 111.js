var exchange = function(nums) {
  const arr = []
  for(let i in nums) {
    if(i % 2) {
      arr.splice(0, 0, 1)
    }else {
      arr.push(i)
    }
  }
  return arr
};

console.log(exchange([1,2,3,4]))