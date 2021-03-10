// O(n^2)

let singleNumber = function(nums) {
  for (let i=0; i<nums.length; i++) {
    let currDupli = true
    for (let j=0; j<nums.length; j++) {
      if (i === j)
        continue
      if (nums[i] === nums[j]) {
        currDupli = false
        break
      }
    }
    if (currDupli)
      return nums[i]
  }
}

console.log(singleNumber([2, 2, 1]))  // 1
console.log(singleNumber([4, 1, 2, 1, 2]))  // 4
console.log(singleNumber([1, 2, 1, 4, 2]))  // 4
console.log(singleNumber([1]))  // 1