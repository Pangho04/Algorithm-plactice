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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {

  return getOrderedNodes(root, [], k)[k - 1];
};

function getOrderedNodes(node, valueArr, k) {
  if (!node) {
    return [];
  }

  const leftValues = getOrderedNodes(node.left, valueArr, k);

  if (valueArr.length >= k) {
    return [...leftValues, node.val];
  }

  const rightValues = getOrderedNodes(node.right, valueArr, k);

  return [...leftValues, node.val, ...rightValues];
}