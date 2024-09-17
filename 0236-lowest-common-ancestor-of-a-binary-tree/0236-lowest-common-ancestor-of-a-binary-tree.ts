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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let left = null;
  let right = null;

  return getLCA(root);

  function getLCA(node: TreeNode): TreeNode | null {
    if (!node) {
      return;
    }

    if (node === p || node === q) {
      return node;
    }

    const left = getLCA(node.left);
    const right = getLCA(node.right);

    if (left && right) {
      return node;
    }

    return left ? left : right;
  }
};