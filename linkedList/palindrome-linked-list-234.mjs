/*
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
*/

import { n1 } from "./constans.mjs";

function isPalindrome (head) {
    const arr = []
    const arr2 = []
    let current = head

    while(current) {
        arr.push(current.val)
        arr2.push(current.val)
        current = current.next
    }

    return arr.reverse().join('') === arr2.join('');
}

console.log(isPalindrome(n1))
