/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

// approach 
// Steps
// Copy next node's value into current node.
// Make current node point to next.next.


var deleteNode = function(node) {

    node.val = node.next.val 
    node.next = node.next.next
    
};