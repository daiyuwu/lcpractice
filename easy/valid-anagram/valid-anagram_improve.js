let isAnagram = function(s, t) {

  if (s.length !== t.length)
    return false

  let map = new Map()

  for (let i=0; i<s.length; i++) {
    let cc = s[i]
    if (map.has(cc)) {
        let cnt = map.get(cc) + 1
        map.set(cc, cnt)
    } else {
        map.set(cc, 1)
    }

    let dc = t[i]
    if (map.has(dc)) {
      let cnt = map.get(dc) - 1
      map.set(dc, cnt)
    } else {
      map.set(dc, -1)
    }

    if (map.get(cc) === 0)
      map.delete(cc)
    if (map.get(dc) === 0)
      map.delete(dc)
  }

  if (map.size === 0)
      return true
  else
      return false
}



console.log(isAnagram('anagram', 'nagaram'))    // true
console.log(isAnagram('rat', 'car'))            // false

// let str = 'anagram'
// console.log(str[0])
