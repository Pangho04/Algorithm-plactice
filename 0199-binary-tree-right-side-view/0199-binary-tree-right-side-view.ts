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

function rightSideView(root: TreeNode | null): number[] {
  const result: number[] = [];
  let maxDepth: number = -1;

  function getNodeStartRight(node: TreeNode, depth: number): void {
    if(!node){
      return;
    }

    if (depth > maxDepth){
      result.push(node.val);
      maxDepth = depth;
    }

    getNodeStartRight(node.right, depth + 1);
    getNodeStartRight(node.left, depth + 1);
  }

  getNodeStartRight(root, 0);

  return result;
};