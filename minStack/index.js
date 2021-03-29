// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.

// Example 1:
// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let minVal = this.stack[0];
  for (let index = 1; index < this.stack.length; index++) {
    const currentValue = this.stack[index];
    if (currentValue < minVal) {
      minVal = currentValue;
    }
  }
  return minVal;
};

const stackFactory = (inputs, values) => {
  let stack;
  for (let index = 0; index < inputs.length; index++) {
    const currentInput = inputs[index];
    const currentValue = values[index];
    if (currentInput === "MinStack") {
      console.log("Stack Initialized");
      stack = new MinStack(...currentValue);
    } else {
      console.log(stack[currentInput](...currentValue));
    }
  }
};

stackFactory(
  ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"],
  [[], [-2], [0], [-3], [], [], [], []]
);
