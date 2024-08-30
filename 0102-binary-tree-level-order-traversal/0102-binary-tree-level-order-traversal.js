/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  let result = [];
  let stack = [root];

  while (stack.length > 0) {
    let levelSize = stack.length;
    let currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      let currentNode = stack.shift();

      currentLevel.push(currentNode.val);

      if (currentNode.left) {
        stack.push(currentNode.left);
      }

      if (currentNode.right) {
        stack.push(currentNode.right);
      }
    }

    result.push(currentLevel);
  }

  return result;
};