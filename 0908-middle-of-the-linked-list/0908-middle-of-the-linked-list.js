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
var middleNode = function(head) {
    let listLength = 0;
    let current = head;

    while (current) {
        listLength++;
        current = current.next;
    }

    let mid = Math.floor(listLength / 2);
    current = head;

    for (let i = 0; i < mid; i++) {
        current = current.next;
    }

    return current;
};
