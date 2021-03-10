let digitSquareSum = function(n) {
  
  let sum = 0
  while (n) {
    let digital = n % 10
    sum += digital * digital
    n = parseInt(n / 10)
  }
  
  return sum
}

let isHappy = function(n) {

  let slow,fast
  slow = fast = n
  do {
    slow = digitSquareSum(slow)
    fast = digitSquareSum(fast)
    fast = digitSquareSum(fast)
  } while (slow !== fast)
  if (slow === 1)
    return true
  else
    return false
}

console.log(isHappy(19))  // true
console.log(isHappy(2))   // false
console.log(isHappy(44))
console.log(isHappy(45))
console.log(isHappy(4545454545))
