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
var swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }

  const node = head;
  const nextNode = head.next;
  const thirdNode = head.next.next;

  head.next.next = node;
  head.next = swapPairs(thirdNode);

  return nextNode;
};