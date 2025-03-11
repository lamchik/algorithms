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
