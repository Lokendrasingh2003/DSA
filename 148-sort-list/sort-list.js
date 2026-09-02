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
var sortList = function(head) {
   if(head==null || head.next==null){
       return head 
   }
   let mid = findMiddle(head)
   let right = mid.next 
   mid.next = null 
   let left = head 
   left = sortList(left)
   right = sortList(right)
   return merge(left,right)

   

    
};

function findMiddle(head){
    if(head==null || head.next==null){
        return head
    }
    let slow = head 
    let fast = head.next 
    while(fast!=null && fast.next!=null){
        slow = slow.next 
        fast = fast.next.next 
    }
    return slow
}

function merge(left,right){
    let dummy = new ListNode(-1)
    let temp = dummy 
    while(left!=null && right!=null){
        if(left.val<right.val){
            temp.next = left 
            temp = left 
            left = left.next 
        }
        else{
            temp.next = right 
            temp = right 
            right = right.next 
        }
    }
    if(left){
        temp.next = left
    }
    else{
        temp.next = right
    }

    return dummy.next

}