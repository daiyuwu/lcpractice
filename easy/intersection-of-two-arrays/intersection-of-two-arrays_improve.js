let intersection = function(nums1, nums2) {
  let set = new Set()
  let intersection = []

  for (let num of nums1) {
    set.add(num)
  }

  for (let num of nums2) {
    if (set.has(num)) {
      intersection.push(num)
      set.delete(num)
    }
  }

  return intersection
}

console.log(intersection([1, 2, 2, 1], [2, 2]))
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))