/*
Given a linked list of integers, remove any nodes from the linked list that have values that have previously occurred in the linked list. Your function should return a reference to the head of the updated linked list.

Example:
Input: (3) -> (4) -> (3) -> (2) -> (6) -> (1) -> (2) -> (6) -> N
Output: (3) -> (4) -> (2) -> (6) -> (1) -> N
Explanation: The input list contains redundant nodes (3), (6), and (2), so those should be removed from the list.
*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function condense_linked_list(node) {
    let head = node;
    let current = node;
    let prev = null;
    let cache = new Set();

    while (current.next) {
        if (!cache.has(current.value)) {
            cache.add(current.value)
            prev = current;
            current = current.next;
        } else {
            prev.next = current.next;
            current = current.next;
        }
    }

    if (cache.has(current.value)) {
        prev.next = null;
    }

    return head;
}