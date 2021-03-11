// n = A.length / 2
// target.length = N
// untarget numbers length = N
// untarget numbers not repeat, length = 1
// find the number of repeat times > 1
let repeatedNTimes = function(A) {
  
  let set = new Set()

  for (let n of A) {
    if (set.has(n))
      return n
    else
      set.add(n)
  }
};

console.log(repeatedNTimes([1, 2, 3, 3]))               // 3
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2]))         // 2
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]))   // 5