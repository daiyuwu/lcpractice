let singleNumber = function(nums) {
  let xorSum = 0
  for (let i=0; i<nums.length; i++) {
    xorSum ^= nums[i]
  }
  return xorSum
}

console.log(singleNumber([2, 2, 1]))  // 1
console.log(singleNumber([4, 1, 2, 1, 2]))  // 4
console.log(singleNumber([1, 2, 1, 4, 2]))  // 4
console.log(singleNumber([1]))  // 1