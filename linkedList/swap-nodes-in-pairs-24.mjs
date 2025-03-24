/*
* Given a linked list, swap every two adjacent nodes and return its head.
* You must solve the problem without modifying the values in the list's nodes
* (i.e., only nodes themselves may be changed.)
Input: head = [1,2,3,4]
Output: [2,1,4,3]
*/

import {ListNode, n1} from "./constans.mjs";

function swapPairs(head) {
    let current_next = head.next
    let current = head
    let prev = null

    while(current_next) {
        if (!prev) {
            head = current_next
        } else {
            prev.next = current_next
        }
        current.next = current_next.next
        let temp = current_next.next
        current_next.next = current
        prev = current
        current = temp
        if (!current) {
            break
        }
        current_next = current.next

    }
    return head
}

[1,2,3,4]
console.log(swapPairs(n1))
