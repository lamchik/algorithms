

function getIntersectionNode(headA, headB) {
    if(!headA || !headB) return null

    let pointerA = headA
    let pointerB = headB
    while(pointerA !== pointerB) {
        pointerA = pointerA === null ? headB : pointerA.next()
        pointerB = pointerB === null ? headA : pointerB.next()
    }
}
