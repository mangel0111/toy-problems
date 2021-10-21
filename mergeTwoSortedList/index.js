// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: l1 = [], l2 = []
// Output: []

// Example 3:
// Input: l1 = [], l2 = [0]
// Output: [0]


//  Definition for singly-linked list.
class Node {
    constructor(d) {
        this.val = d;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }


    addToTheLast(node) {
        if (this.head == null) {
            this.head = node;
        }
        else {
            let temp = this.head;
            while (temp.next != null)
                temp = temp.next;
            temp.next = node;
        }
    }

    printList() {
        let temp = this.head;
        let list = [];
        while (temp != null) {
            list.push(temp.val);
            temp = temp.next;
        }
        console.log(list);
    }
}


const assignRemainingLinkedList = (linkedList, head) => {
    linkedList.addToTheLast(new Node(head.val));
    linkedList.addToTheLast(head.next);
    return linkedList;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let mergedLinkedList = new LinkedList();
    let currentFirstHead = l1.head;
    let currentSecondHead = l2.head;
    while (1) {
        if (!currentFirstHead || !currentSecondHead) {
            mergedLinkedList = assignRemainingLinkedList(mergedLinkedList, currentSecondHead || currentFirstHead);
            break;
        }

        if (currentFirstHead.val < currentSecondHead.val) {
            mergedLinkedList.addToTheLast(new Node(currentFirstHead.val));
            currentFirstHead = currentFirstHead.next;
        } else {
            mergedLinkedList.addToTheLast(new Node(currentSecondHead.val));
            currentSecondHead = currentSecondHead.next;
        }
    }
    return mergedLinkedList;
};

let llist1 = new LinkedList();
let llist2 = new LinkedList();

// Node head1 = new Node(5);
llist1.addToTheLast(new Node(5));
llist1.addToTheLast(new Node(10));
llist1.addToTheLast(new Node(15));

// Node head2 = new Node(2);
llist2.addToTheLast(new Node(2));
llist2.addToTheLast(new Node(3));
llist2.addToTheLast(new Node(20));
llist2.addToTheLast(new Node(25));
llist2.addToTheLast(new Node(27));
llist2.addToTheLast(new Node(28));

console.log(mergeTwoLists(llist1, llist2).printList())
