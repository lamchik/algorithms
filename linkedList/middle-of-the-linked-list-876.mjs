/*
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.
*/

import {n1} from "./constans.mjs";

function countNodes(head) {
    let count = 0
    let current = head

    while (current) {
        count++
        current = current.next
    }
    return count
}
function middleNode(head) {
    const count = countNodes(head)
    let middle = count % 2 === 0 ? count / 2 + 1 : Math.ceil(count / 2)
    let current = head
    let index = 1
    while(index < middle) {
        current = current.next
        index++
    }
    return current
}

console.log(middleNode(n1))
