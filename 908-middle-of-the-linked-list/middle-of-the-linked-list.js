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
    let temp = head 
    let count = 0
    while(temp){
       count++
       temp=temp.next 
    }
    let mid = 0
    if(count%2==0){
        mid = Math.ceil(count/2)+1
    }
    else {
        mid = Math.ceil(count/2)
    }
    let find = 0
    let temp1 = head
    while(temp1){
       find++ 
       if(find==mid){
          return temp1
       }
       temp1=temp1.next
    }
    
};