let repeatedNTimes = function(A) {
  for (let i=2; i<A.length; i++) {
    if (A[i] === A[i-1] || A[i] === A[i-2])
      return A[i]
  }
  return A[0]
};

console.log(repeatedNTimes([1, 2, 3, 3]))               // 3
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2]))         // 2
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]))   // 5