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
var hasCycle = function(head) {
    let checked = new Set();
	
	while (head !== null) {
		if (checked.has(head)) {
			return true;
		} else {
			checked.add(head);
			head = head.next;
		}
	}
	return false;
};
