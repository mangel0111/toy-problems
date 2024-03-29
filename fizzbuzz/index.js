// The FizzBuzz challenge goes something like this. Write a function that does the following:

// console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
// logs fizz instead of the number for multiples of 3
// logs buzz instead of the number for multiples of 5
// logs fizzbuzz for numbers that are multiples of both 3 and 5
// Example:
// fizzBuzz(5)
// Result:

// 1
// 2
// fizz
// 4
// buzz

const printNumbers = (index) => {
  const isMultipleOfFive = index % 5 === 0;
  const isMultipleOfThree = index % 3 === 0;
  if (isMultipleOfFive && isMultipleOfThree) {
    // console.log("fizzBuzz");
    return "FizzBuzz";
  }
  if (isMultipleOfThree) {
    // console.log("fizz");
    return "Fizz";
  }
  if (isMultipleOfFive) {
    // console.log("Buzz");
    return "Buzz";
  }
  // console.log(index);
  return index;
};
const fizzBuzz = (number) => {
  const response = [];
  for (let index = 1; index <= Math.abs(number); index++) {
    const number = printNumbers(Math.abs(index));
    if (typeof number === "number") {
      response.push(number);
    }
  }
  return response;
};

[1, 5, 10, 20, 45, 100, 250, 500, -1, -20].forEach((num) => {
  console.log(num, fizzBuzz(num).length);
});
