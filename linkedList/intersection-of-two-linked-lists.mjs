
/* Вариант 1 */
function getIntersectionNode(headA, headB) {
    if(!headA || !headB) return null

    let pointerA = headA
    let pointerB = headB
    while(pointerA !== pointerB) {
        pointerA = pointerA === null ? headB : pointerA.next()
        pointerB = pointerB === null ? headA : pointerB.next()
    }
}


/* Вариант 2 */

/*Запускаем цикл по первому листу и внутри него по второму листу пока не надем пересечение */
function getIntersectionNode2(headA, headB) {
    if(!headA || !headB) return null

    /* создаем переменные с заголовками листов чтобы по ним итерироваться */
    let a = headA
    let b = headB
    /* В эту переменную сохраним ноду с которой листы начнут пересекаться */
    let currentA = null
    while(a) {
        /* запускаем цикл по b на каждой ноде в листе а */
        while(b) {
            /* Если нашли пересечение сохраняем ноду в currentA с которой началось перечение и
             запускаем третий цикл пока не дойдем до конца и
            если дошли до конца то мы нашли нужное персечение и возвращаем currentA */
            if(a === b) {
                currentA = a
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
        /* b всегда запускаем с самого начала */
        b = headB
    }
}
