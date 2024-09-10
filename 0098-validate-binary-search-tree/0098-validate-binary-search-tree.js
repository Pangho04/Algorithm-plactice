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
var isValidBST = function (root) {
  return isBST(root, -Infinity, Infinity);
};

function isBST(node, minKey, maxKey) {
  if (node === null) {
    return true;
  }

  if (node.val <= minKey || node.val >= maxKey) {
    return false;
  }

  return isBST(node.left, minKey, node.val) && isBST(node.right, node.val, maxKey);
}