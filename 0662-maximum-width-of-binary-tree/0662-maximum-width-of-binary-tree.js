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
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  const leftPoints = [];
  let maxLen = 0;

  getMaxLen(root, 0, 0);

  return maxLen;

  function getMaxLen(node, level, point) {
    if (!node) {
      return;
    }

    if (!leftPoints[level]) {
      leftPoints[level] = point;
    }

    const curLen = point - leftPoints[level] + 1;
    maxLen = Math.max(curLen, maxLen);

    getMaxLen(node.left, level + 1, curLen * 2);
    getMaxLen(node.right, level + 1, curLen * 2 + 1);
  }
};