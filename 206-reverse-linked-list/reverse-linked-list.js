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
var reverseList = function(head) {
    // let last = null     solved by iteratively 
    // let current = head 
    // while(current){
    //     let next = current.next 
    //     current.next = last
    //     last = current 
    //     current = next 
    // }
    // return last

    // now recursivily 

    if(head == null || head.next == null){
        return head 
    }
    let newHead = reverseList(head.next)
    let front = head.next 
    front.next = head 
    head.next = null 

    return newHead
    
};