function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

let find = function(root, needNum) {
  if (root === null)
    return false
  if (needNum === root.val)
    return true

  if (needNum < root.val)
    return find(root.left, needNum)
  else
    return find(root.right, needNum)
}

let findTarget = function(root, k) {
  if (root === null)
    return false

  let needNum = k - root.val
  // let rs = find(root, needNum)
  // if (rs === true)
  //   return true

  let rs
  if (root.left !== null)
    rs = find(root.left, k)
  else if (root.right !== null)
    rs = find(root.right, k)

  if (rs === true)
    return true
  else if (needNum < root.val)
    return findTarget(root.left, k)
  else if (needNum > root.val)
    return findTarget(root.right, k)

  return false
}

let root1 = new TreeNode(5, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6, null, new TreeNode(7)))
console.log(findTarget(root1, 9))    // true
console.log(findTarget(root1, 28))   // false
let root2 = new TreeNode(2, new TreeNode(1), new TreeNode(3))
console.log(findTarget(root2, 4))                   // true
console.log(findTarget(root2, 1))                   // false
console.log(findTarget(root2, 3))                   // true
console.log(findTarget(new TreeNode(1), 2))                   // false
console.log(findTarget(new TreeNode(3, new TreeNode(1)), 2))                   // false