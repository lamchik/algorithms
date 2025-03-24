/*Given the head of a linked list, rotate the list to the right by k places.
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
*/


import {n1} from "./constans.mjs";

function getLastNode (head) {
    let current = head
    while(current.next) {
        current = current.next
    }
    return current
}

function deleteLastNode(head) {
    let current = head
    let nextNode = current.next
    let prev = null
    while(current) {
        if(!nextNode) {
            prev.next = null
        }
        prev = current
        current = nextNode
        nextNode = current ? current.next : null
    }
    return head
}

function rotateList(head, k) {
    if (!k || !head.next) {
        return head
    }
    let current = head
    let currentNext = current
    let lastNode = getLastNode(head)

    if(k === 0) {
        current = lastNode
        deleteLastNode(currentNext)
        current.next = currentNext
        return current
    }
    if(k > 0) {
        current = lastNode
        deleteLastNode(currentNext)
        current.next = currentNext
        return rotateList(current, k-1)
    }
}

console.log(rotateList(n1, 2))
