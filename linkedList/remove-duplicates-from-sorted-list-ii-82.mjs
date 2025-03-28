/*
* Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
* Return the linked list sorted as well.
* Input: head = [1,2,3,3,4,4,5]
* Output: [1,2,5]
*/



import {l1, ListNode} from "./constans.mjs";

/* The most stupid solution^ sorry that you see this */


/* Алгоритм: проходимся по листу и сохраняем все значения нод в объекте Map, где ключи это значения нод а значения это то сколько раз они повторяются в листе.
* Ключи мы обязательно приводим к строке (чтобы потом понять что удалять из полученного листа)
* Далее отсортировываем из всех ключей только те ключи нашего объекта, у которых значение === 1 что значит что эти ключи встречаются в листе только единожды
* и перезаписываем лист только с теми ключами которые мы отсортировали
* После перезаписи листа, у нас может остаться "хвост" от старого листа поэтому нам надо его удалить, чтобы понять что это именно то что нам надо удалить,
* мы дложны стравнить типы значений, так как у нас ключи это строки, то если мы встречаем дальше число то это именно наш хвост который мы заннуливаем
* и далее все наши полученные значенич листа мы дложны привести обратно к числам
*
* @WARN: Мы используем именно структуру данных Map потому что эта структура позволяет ПОСЛЕДОВАТЕЛЬНО записывать данные в себя, в то время как обычный объект
* при записи в него ключей и значений сортирует ключи по возраставнию если они могут быть приведены к строке
*
*
* */
function mapToLinkedList(map, head) {
    let current = head;
    const keys = Array.from(map.keys());
    let i = 0;

    if (![...map.values()].some(el => el === 1)) {
        head.next = null
        head = head.next
        return head
    }

    /* Перезаписываем лист */
    while (current && i < keys.length) {
        if (map.get(keys[i]) === 1) {
            current.val = keys[i]; // Перезаписываем значения узлов
            if (!current.next && i < keys.length - 1) {
                current.next = new ListNode(keys[i + 1]); // Добавляем новый узел, если нужно
            }
            current = current.next;
        }
        i++;
    }

    /* При перезаписи листа может остаться хвост, наши ключи были строками поэтому если мы встречаем число то этот хвост надо удалить */
    let current2 = head;
    while (current2?.next) {
        if (typeof current2.next.val === "number") {
            current2.next = null;
            break;
        }
        current2 = current2.next;
    }

    /* Приводим значеник числам */
    let current3 = head;
    while (current3) {
        current3.val = +current3.val;
        current3 = current3.next;
    }
    return head;
}

function deleteDuplicates (head) {
    if (!head) {
        return head
    }
    let map = new Map();
    let current = head
    while (current) {
        map.set(current.val.toString(), (map.get(current.val.toString()) || 0) + 1);
        current = current.next;
    }
    return mapToLinkedList(map, head);
}

console.log(deleteDuplicates(l1))
