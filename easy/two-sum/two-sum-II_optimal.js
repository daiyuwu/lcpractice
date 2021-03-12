let twoSum = function(numbers, target) {
  let i = 0, j = numbers.length - 1

  while (numbers[i] + numbers[j] !== target) {
    let trySum = numbers[i] + numbers[j]
    if (trySum > target)
      j--
    else if (trySum < target)
      i++
  }

  return [i+1, j+1]
}

console.log(twoSum([2, 7, 11, 15], 9))   // [1, 2]
console.log(twoSum([2, 3, 4], 6))        // [1, 3]
console.log(twoSum([-1, 0], -1))         // [1, 2]
console.log(twoSum([-3, -1, 0, 1, 2], -2))  // [1, 4]