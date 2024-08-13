/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const list1Value = [];
  const list2Value = [];
  let result = null;

  distributeValue(list1, list1Value);
  distributeValue(list2, list2Value);

  const mergedList = list1Value.concat(list2Value).sort((a, b) => a - b);
  const headNode = new ListNode(mergedList[0], null);

  result = mergedList.length > 0 ? getLinkedList(headNode, mergedList) : null;

  function getLinkedList(headNode, mergedList) {
    let current = headNode;

    for (let i = 1; i < mergedList.length; i++) {
      const newNode = new ListNode(mergedList[i], null);

      current.next = newNode;
      current = newNode;
    }

    return headNode;
  }

  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  function getNextLink(headNode, nextList) {
    headNode.next = new ListNode(nextList, null);
  }

  function distributeValue(list, listValue) {
    if(!list){
      return null;
    }

    listValue.push(list.val);

    if (list.next !== null) {
      distributeValue(list.next, listValue);
    } else {
      return null;
    }
  }

  return result;
};