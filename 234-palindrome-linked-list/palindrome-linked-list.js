/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head==null || head.next == null){
        return true
    }
    let slow = head 
    let fast = head 
    while(fast.next != null && fast.next.next !=null){
        slow = slow.next 
        fast = fast.next.next 
    }
    let newHead = reverse(slow.next)
    let first = head 
    let second = newHead 
    while(second!=null){
        if(first.val!=second.val){
            reverse(newHead)
            return false
        }
        first = first.next 
        second = second.next 
    }
    reverse(newHead)
    return true



    function reverse(head){
        if(head==null || head.next==null){
            return head
        }
        let newHead = reverse(head.next)
        let temp = head.next 
        temp.next = head 
        head.next = null 
        return newHead
        
    }
    
};