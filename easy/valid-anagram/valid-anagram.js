let isAnagram = function(s, t) {

  if (s.length !== t.length)
  return false

  let map = new Map()

  for (let c of s) {
      if (map.has(c)) {
          let cnt = map.get(c) + 1
          map.set(c, cnt)
      } else {
          map.set(c, 1)
      }
  }

  for (let c of t) {
      if (map.has(c)) {
          let cnt = map.get(c) - 1
          if (cnt === 0)
              map.delete(c)
          else
              map.set(c, cnt)
      } else {
          return false
      }
  }
  
  if (map.size === 0)
      return true
  else
      return false
}



console.log(isAnagram('anagram', 'nagaram'))    // true
console.log(isAnagram('rat', 'car'))            // false
