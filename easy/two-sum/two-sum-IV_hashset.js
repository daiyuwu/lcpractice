function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

let find = function(root, target, set) {
  if (root === null)
    return false
  if (set.has(target - root.val))
    return true
  set.add(root.val)
  return find(root.left, target, set) || find(root.right, target, set)
}

let findTarget = function(root, k) {
  let set = new Set()
  return find(root, k, set)
}

let root1 = new TreeNode(5, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6, null, new TreeNode(7)))
console.log(findTarget(root1, 9))    // true
console.log(findTarget(root1, 28))   // false
let root2 = new TreeNode(2, new TreeNode(1), new TreeNode(3))
console.log(findTarget(root2, 4))                   // true
console.log(findTarget(root2, 1))                   // false
console.log(findTarget(root2, 3))                   // true