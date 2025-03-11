import {ListNode} from "./constans";

/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/

function mergeTwoLists(list1, list2) {
    let one = new ListNode(null);
    let currentNode = one
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            currentNode.next = list1
            list1 = list1.next
        }
        else {
            currentNode.next = list2
            list2 = list2.next
        }
        currentNode = currentNode.next
    }
    if(list1) {
        currentNode.next = list1
    }

    if(list2) {
        currentNode.next = list2
    }
    return one.next
}
