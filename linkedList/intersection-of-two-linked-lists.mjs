

function getIntersectionNode(headA, headB) {
    if(!headA || !headB) return null

    let pointerA = headA
    let pointerB = headB
    while(pointerA !== pointerB) {
        pointerA = pointerA === null ? headB : pointerA.next()
        pointerB = pointerB === null ? headA : pointerB.next()
    }
}


function getIntersectionNode2(headA, headB) {
    if(!headA || !headB) return null

    let a = headA
    let b = headB
    let currentA = null
    while(a) {

        while(b) {
            currentA = a
            if(a === b) {
                while (a === b) {
                    a = a.next
                    b = b.next
                    if(!a && !b) {
                        return currentA
                    }
                }
            }
            else {
                b = b.next
            }
        }
        a = a.next
        b = headB
    }
}
