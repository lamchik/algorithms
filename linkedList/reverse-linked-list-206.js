/*
* Given the head of a singly linked list, reverse the list, and return the reversed list.
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/

function reverseList(head) {
    if(!head) {
        return head
    }
    let current = head
    let nextNode = null
    let previous = head.next;

    while (previous) {
        current.next = nextNode
        nextNode = current
        current = previous
        previous = previous.next;
    }

    current.next = nextNode
    return current
}
