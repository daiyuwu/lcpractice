let intersect = function(nums1, nums2) {
  let collect = []

  let map = new Map()

  for (let num of nums1) {
    if (map.has(num)) {
      let cnt = map.get(num) + 1
      map.set(num, cnt)
    } else {
      map.set(num, 1)
    }
  }

  for (let num of nums2) {
    if (map.has(num)) {
      let cnt = map.get(num) - 1
      collect.push(num)
      if (cnt === 0)
        map.delete(num)
      else
        map.set(num, cnt)
    }
  }

  return collect
}

console.log(intersect([1, 2, 2, 1], [2, 2]))           // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))  // [4, 9]