/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
  const nodes: ListNode[] = [];
  let currentNode = head;

  while (currentNode !== null) {
    if (!currentNode){
      break;
    }

    nodes.push(currentNode);

    currentNode = currentNode.next;
  }

  if (nodes.length % 2 === 0) {
    return nodes[Math.floor(nodes.length / 2)];
  } else {
    return nodes[Math.floor(nodes.length / 2)];
  }
};