/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let temp1 = l1
    let temp2 = l2 
    let dummy = new ListNode(0)
    let temp = dummy
    let carry = 0
    while(temp1 || temp2 || carry){ 
        let sum = carry 
        if(temp1){
            sum+=temp1.val 
            temp1 = temp1.next
        }
        if(temp2){
            sum+=temp2.val 
            temp2 = temp2.next
        }

        carry = Math.floor(sum/10)
        let digit = sum%10  
        temp.next = new ListNode(digit)
        temp = temp.next
    } 
    return dummy.next
       
    
};