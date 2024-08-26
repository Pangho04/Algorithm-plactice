/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head?.val) {
    return false;
  }

  let passOne = head;
  let passTwo = head;

  while (passOne !== null && passTwo !== null) {
    passOne = passOne?.next;
    passTwo = passTwo?.next?.next;

    if (passOne === passTwo) {
      return true;
    }
  }

  return false;
};