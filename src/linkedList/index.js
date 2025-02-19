/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';

const LinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

LinkedList.prototype.makeNode = function (value, next) {
  let node = { value, next };
  return node;
};

LinkedList.prototype.addToHead = function (value) {
  this.head = this.makeNode(value, this.head);
  this.size++;
};

LinkedList.prototype.addToTail = function (value) {
  let newNode = this.makeNode(value);
  let current;

  if (!this.head) {
    this.head = newNode;
    return;
  }

  current = this.head;
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
  this.size++;
};

LinkedList.prototype.insertAt = function (value, index) {
  if (index > 0 && index > this.size) {
    return;
  }
  if (index === 0) {
    this.addToHead(value);
    return;
  }

  const node = this.makeNode(value);
  let current;
  let previous;

  current = this.head;
  let count = 0;

  while (count < index) {
    previous = current;
    count++;
    current = current.next;
  }

  node.next = current;
  previous.next = node;
  this.size++;
};

LinkedList.prototype.getAt = function (index) {
  let current = this.head;
  let count = 0;
  while (current) {
    if (count == index) {
      console.log(current.value);
    }
    count++;
    current = current.next;
  }
};

LinkedList.prototype.print = function () {
  let current = this.head;

  while (current) {
    console.log(current.value);
    current = current.next;
  }
};

LinkedList.prototype.removeAt = function (index) {
  if (index > 0 && index > this.size) {
    return;
  }
  let current = this.head;
  let previous;
  let count = 0;
  if (index === 0) {
    this.head = current.next;
  } else {
    while (count < index) {
      count++;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
  }
  this.size--;
};

LinkedList.prototype.clearList = function () {
  this.head = null;
  this.size = 0;
};

const list = new LinkedList();
list.addToHead(100);
list.addToHead(200);
list.addToHead(300);
list.addToTail(400);
list.insertAt(500, 2);
//list.print();
//list.getAt(0);

list.removeAt(2);
list.print();

// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';
