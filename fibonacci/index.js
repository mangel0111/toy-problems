/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

const nthFibonacci = (limitNumber) => {
  let previousValue = 0;
  let nextValue = 1;
  let temp;

  while (limitNumber >= 1) {
    temp = nextValue;
    nextValue = nextValue + previousValue;
    previousValue = temp;
    limitNumber--;
  }

  return previousValue;
};

const nthFibonacciAlt = (limitNumber) => {
  if (limitNumber <= 1) {
    return limitNumber;
  }
  return nthFibonacciAlt(limitNumber - 1) + nthFibonacciAlt(limitNumber - 2);
};

console.log("2", nthFibonacci(2));
console.log("2", nthFibonacciAlt(2));
console.log("3", nthFibonacci(3));
console.log("3", nthFibonacciAlt(3));
console.log("4", nthFibonacci(4));
console.log("4", nthFibonacciAlt(4));
console.log("5", nthFibonacci(5));
console.log("5", nthFibonacciAlt(5));
console.log("9", nthFibonacci(9));
console.log("9", nthFibonacciAlt(9));
