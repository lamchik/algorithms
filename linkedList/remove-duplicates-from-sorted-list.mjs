/*
* Given the head of a sorted linked list, delete all duplicates such that each
* element appears only once. Return the linked list sorted as well.
* Input: head = [1,1,2]
* Output: [1,2]
*/

import {n1} from "./constans.mjs";

function deleteDuplicates (head) {
    const obj = {}
    let current = head
    let prev = null

    while (current) {
        if (obj[current.val]) {
            let t = current
            current = prev
            current.next = t.next
        } else {
            obj[current.val] = 1
        }
        prev = current
        current = current.next
    }
    return head
}

console.log(deleteDuplicates(n1))
