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
  const postDepth: number[] = [-1];

  function getNodeStartRight(node, depth) {
    if(!node){
      return null;
    }

    if (depth > postDepth[postDepth.length - 1]){
      result.push(node.val);
      postDepth.push(depth);
    }

    const rightSide = getNodeStartRight(node.right, depth + 1);
    let leftSide = null;

    if (rightSide === null) {
      leftSide = getNodeStartRight(node.left, depth + 1);
    }

    if (!rightSide && !leftSide) {
      return null;
    }
  }

  getNodeStartRight(root, 0);

  console.log(result);

  return result;
};