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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const reversedTree = invertingTreeNode(root);

  function invertingTreeNode(node) {
    if(node === null){
      return node;
    }

    const reversedChildrenNode = getReverseTreeNode(node);

    if (reversedChildrenNode.left !== null && reversedChildrenNode.right !== null) {
      invertingTreeNode(reversedChildrenNode.left);
      invertingTreeNode(reversedChildrenNode.right);
    }

    return reversedChildrenNode;
  }

  function getReverseTreeNode(node) {
    if (node === null) {
      return node;
    }

    const leftNode = node.left;
    const rightNode = node.right;


    node.left = rightNode;
    node.right = leftNode;

    return node;
  }

  return reversedTree;
};