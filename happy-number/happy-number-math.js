let isHappy = function(n) {
  let charArr = n.toString().split('')
  
  n = charArr.reduce((total, curr) => {
    return total + Math.pow(+curr, 2)
  }, 0)

  if (n === 1)
    return true
  else if (n === 89)
    return false
  else
    return isHappy(n)
}

console.log(isHappy(19))  // true
console.log(isHappy(2))   // false
console.log(isHappy(44))
console.log(isHappy(45))
console.log(isHappy(4545454545))