/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
  let maxDepth: number = 0;

  function getMaxDepth(node: TreeNode, depth: number): void {
    if(!node) {
      return;
    }

    if(depth > maxDepth) {
      maxDepth = depth;
    }

    getMaxDepth(node.left, depth + 1);
    getMaxDepth(node.right, depth + 1);
  }

  getMaxDepth(root, 1);

  return maxDepth;
};