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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (inorder.length === 0) return null;

  const root = new TreeNode();
  const rootVal = preorder.shift();
  const valIndex = inorder.indexOf(rootVal);

  root.val = rootVal;
  root.left = buildTree(preorder, inorder.slice(0, valIndex));
  root.right= buildTree(preorder, inorder.slice(valIndex + 1));

  return root;
};