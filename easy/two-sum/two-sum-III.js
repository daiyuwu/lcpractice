class TwoSum {
  nums = []

  add = function(num) {
    if (this.nums.length === 0) {
      this.nums.push(num)
      return
    }

    let left = 0, right = this.nums.length - 1, mid
    do {
      mid = Math.floor((left + right) / 2)
      if (num < this.nums[mid])
        right = mid - 1
      else if (num > this.nums[mid])
        left = mid + 1
      else 
        break
    } while (left <= right)

    if (num <= this.nums[mid])
      this.nums.splice(mid, 0, num)
    else if (num > this.nums[mid])
      this.nums.splice(mid + 1, 0, num)
  }

  find = function(target) {
    let left = 0, right = this.nums.length - 1

    while (left < right) {
      let sum = this.nums[left] + this.nums[right]

      if (target < sum)
        right--
      else if (target > sum)
        left++
      else if (target === sum)
        return true
    }

    return false
  }
}

let twoSum = new TwoSum()

twoSum.add(3)
twoSum.add(4)
twoSum.add(10)
twoSum.add(7)
twoSum.add(5)

console.log('nums: ', twoSum.nums)

console.log('\t' + twoSum.find(4))
console.log('\t' + twoSum.find(7))
console.log('\t' + twoSum.find(8))
console.log('\t' + twoSum.find(9))
