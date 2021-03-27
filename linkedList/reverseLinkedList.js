function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr != null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
};

var reverseListRecursive = function (head) {
  if (head == null || head.next == null) return head;
  let p = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};

const firstNode = new ListNode(2);
const twoNodesList = new ListNode(1, firstNode);
console.log(reverseList(twoNodesList, 1));
