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
var oddEvenList = function(head) {
  if (!head) {
    return head;
  }

  let oddNode = head;
  let evenNode = head.next;
  const evenHead = evenNode;

  while(oddNode.next && evenNode.next) {
    oddNode.next = evenNode.next;
    evenNode.next = oddNode.next.next;
    evenNode = evenNode.next;
    oddNode = oddNode.next;
  }

  oddNode.next = evenHead;

  return head;
};