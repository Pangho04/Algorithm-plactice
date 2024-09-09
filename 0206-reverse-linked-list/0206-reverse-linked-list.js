/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const originList = [];

  getOriginList(head);
  
  return getNewListNode(originList.reverse());

  function getOriginList(node) {
    if (node === null) {
      return;
    }

    originList.push(node.val);

    if (node.next) {
      getOriginList(node.next);
    }
  }

  function getNewListNode (list) {
    if (!list.length > 0) {
      return null;
    }
    const currentNode = list[0];
    
    list.shift();

    const newListNode = new ListNode(currentNode, getNewListNode(list));

    return newListNode;
  }

};