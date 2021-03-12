let twoSum = function(numbers, target) {
  for (let i=0; i<numbers.length; i++) {
    let needNum = target - numbers[i]
    for (let j=i+1; j<numbers.length; j++) {
      if (numbers[j] === needNum)
        return [i+1, j+1]
    }
  }

  return []
}

console.log(twoSum([2, 7, 11, 15], 9))   // [1, 2]
console.log(twoSum([2, 3, 4], 6))        // [1, 3]
console.log(twoSum([-1, 0], -1))         // [1, 2]
console.log(twoSum([-3, -1, 0, 1, 2], -2))  // [1, 4]