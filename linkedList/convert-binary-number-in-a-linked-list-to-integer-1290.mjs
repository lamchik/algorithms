/*
* Given head which is a reference node to a singly-linked list.
* The value of each node in the linked list is either 0 or 1.
* The linked list holds the binary representation of a number.
* Return the decimal value of the number in the linked list.
* The most significant bit is at the head of the linked list.
* Input: head = [1,0,1]
* Output: 5
* Explanation: (101) in base 2 = (5) in base 10
*/

import {l1} from "./constans.mjs";

function getDecimalValue(head) {
    let string = ''
    while(head) {
        string  = string + head.val
        head = head.next
    }
    return parseInt(string, 2)
}

console.log(getDecimalValue(l1))
