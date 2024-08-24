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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let leftDepth = 0;
  let rightDepth = 0;
  let currentNode = null;

  if (!root) {
    return true;
  }

  currentNode = root.left;

  while (currentNode) {
    let direction = null;

    leftDepth++;

    if (currentNode?.right?.right && !currentNode.left) {
      return false;
    }
    
    if(currentNode?.left?.left && !currentNode.right) {
      return false;
    }

    direction = currentNode.left ? "left" : "right";
    currentNode = currentNode[direction];
  }

  currentNode = root.right;

  while (currentNode) {
    let direction = null;

    rightDepth++;

    if (currentNode?.right?.right && !currentNode.left) {
      return false;
    }
    
    if(currentNode?.left?.left && !currentNode.right) {
      return false;
    }

    direction = currentNode.right ? "right" : "left";
    currentNode = currentNode[direction];
  }

  if (Math.abs(leftDepth - rightDepth) <= 1) {
    return true;
  } else {
    return false;
  }

};
