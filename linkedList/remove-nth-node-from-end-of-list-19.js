function get_node_by_index(node, index) {
    while (index) {
        node = node.next;
        index -= 1;
    }
    return node;
}

function count_nodes(node) {
    let countNodes = 0
    while (node) {
        countNodes++
        node = node.next;
    }
    return countNodes;
}

function removeNthFromEnd(head, n) {
    let countNodes = count_nodes(head)
    if(countNodes === 1 && n === 1) {
        head = null
        return head
    }
    const indexForDeleteNode = Math.abs(n - countNodes)

    if(n === 1) {
        const previousNode = get_node_by_index(head, indexForDeleteNode - 1)
        previousNode.next = null
        return head
    }
    if(countNodes === n) {
        head = head.next
        return head
    }
    else {
        const previousNode = get_node_by_index(head, indexForDeleteNode - 1)
        const nextNode = get_node_by_index(head, indexForDeleteNode + 1)
        previousNode.next = nextNode
        return head
    }
}
