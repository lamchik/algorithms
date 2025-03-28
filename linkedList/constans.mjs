export function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


export const n3 = new ListNode(2);
export const n2 = new ListNode(1, n3);
export const n1 = new ListNode(0, n2);

export const l6 = new ListNode(2);
export const l5 = new ListNode(0, l6);
export const l4 = new ListNode(0, l5);
export const l3 = new ListNode(-1, l4);
export const l2 = new ListNode(-1, l3);
export const l1 = new ListNode(-3, l2);
