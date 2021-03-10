let containsNearbyDuplicate = function(nums, k) {
  let set = new Set()
  for (let i=0; i<nums.length; i++) {
    if (i > k)
      set.delete(nums[i-k-1])
    if (set.has(nums[i]))
      return true
    set.add(nums[i])
  }
  return false
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))  // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))   // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))   // false