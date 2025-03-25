/*Given the head of a linked list, rotate the list to the right by k places.
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

1) 5,1,2,3,4
2) 4,5,1,2,3
*/


import {n1} from "./constans.mjs";

function getLastNode (head) {
    let current = head
    while(current.next) {
        current = current.next
    }
    return current
}

function countNodes (head) {
    if(!head) {
        return 0
    }
    let current = head
    let count = 1
    while(current.next) {
        count++
        current = current.next
    }
    return count
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

/* Берем последнюю ноду и сохранаем в переменную, к ней добавляем хвост остальной из нашей ноды
(который предварительно сохранили и вырезали из него поледнюю ноду
тк она у нас будет в начале) */

/* recursion */
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

/* cycle */

function rotateList2(head, k) {
    if (!k || !head.next) {
        return head
    }

    let current = head
    let currentNext = current
    let lastNode = getLastNode(head)
    let countHead = countNodes(head)
    let countIterations = k % countHead
    while(countIterations) {
        current = lastNode
        deleteLastNode(currentNext)
        current.next = currentNext
        lastNode = getLastNode(current)
        currentNext = current
        countIterations--
    }
    return current
}
console.log(rotateList2(n1, 2))

//012, 201,
