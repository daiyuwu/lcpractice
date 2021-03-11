let containsNearbyDuplicate = function(nums, k) {
  let map = {}

  for (let i=0; i<nums.length; i++) {
    let n = nums[i]
    if (map[n] === undefined) 
      map[n] = i
    else {
      if (i - map[n] <= k)
        return true
      else
        map[n] = i
    }
  }

  return false
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))  // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))   // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))   // false
