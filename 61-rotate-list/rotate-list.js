/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */    
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;
    let tail = head 
    let length = 1
    while(tail.next!=null){
        length++ 
        tail = tail.next
    }
    if(k%length==0) return head 
    let rotate = length - (k%length)
    let temp = head
    for(let i=1;i<rotate;i++){
        temp = temp.next
    }
    tail.next = head 
    head = temp.next 
    temp.next = null 
    return head
    
};