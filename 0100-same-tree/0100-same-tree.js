/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  
  const pNodes = getNodes(p);
  const qNodes = getNodes(q);

  console.log(pNodes, qNodes)

  return JSON.stringify(pNodes) === JSON.stringify(qNodes);

  function getNodes (node) {
    if (!node) {
      return;
    }

    const result = [];

    result.push(node.val);

    const leftNodes = getNodes(node.left);
    const rightNodes = getNodes(node.right);

    leftNodes ? result.push(...leftNodes) : result.push(null);
    rightNodes ? result.push(...rightNodes) : result.push(null);

    return result;
  }
};