/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    insertNodeBetween(head)
    connectRandomNode(head)
    let newHead = makeNewList(head)
    return newHead

    
};

function insertNodeBetween(head){
    let temp = head
    while(temp){
        let copy = new _Node(temp.val)
        copy.next = temp.next 
        temp.next = copy 
        temp = temp.next.next
    }
}

function connectRandomNode(head){
    let temp = head 
    while(temp){
        let copy = temp.next 
        if(temp.random){
            copy.random = temp.random.next
        }
        else{
            copy.random = null
        }
        temp = temp.next.next
    }
}

function makeNewList(head){
    let dummy = new _Node(-1)
    let res = dummy 
    let temp = head 
    while(temp){
        res.next = temp.next 
        temp.next = temp.next.next 
        res = res.next 
        temp = temp.next
    }
    return dummy.next
}