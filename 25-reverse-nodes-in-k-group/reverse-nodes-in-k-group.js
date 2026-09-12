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
var reverseKGroup = function(head, k) {
    let temp = head
    let previousNode = new ListNode(null)
    let nextNode = new ListNode(null)
    while(temp){
    let kthNode = findknode(temp,k)
    if(kthNode==null){
        if(previousNode){
            previousNode.next = temp 
            break
        }
    }
    nextNode = kthNode.next
    kthNode.next = null 
    reverse(temp)
    if(temp==head){
        head = kthNode
    }
    else{
        previousNode.next = kthNode
    }
    previousNode = temp 
    temp = nextNode 
    }
    return head
};

function findknode(temp,k){
    while(temp && k>1){
        k--
        temp=temp.next
    }
    return temp
}
function reverse(temp){
    let prev=null
    let current = temp 
    while(current){
        let next = current.next 
        current.next = prev 
        prev = current 
        current = next
    }
    return prev
}