/*Add up all numbers in the list. [2,7,8,3,1,4] Returns 25*/
const addAll = (numbers) => {
  const result = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return result;
};

const addAllWithoutReduce = (numbers) => {
  let result = 0;
  for (let index = 0; index < numbers.length; index++) {
    result += numbers[index];
  }
  return result;
};

console.log("25", addAll([2, 7, 8, 3, 1, 4]));
console.log("25", addAllWithoutReduce([2, 7, 8, 3, 1, 4]));
