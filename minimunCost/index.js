// Split the array in 3 sections and take the numbers that give you the sum with the min value

const minimunCost = (list) => {
  let minSum = Infinity;

  for (let index = 1; index < list.length - 1; index++) {
    const current = list[index];

    for(let inverseIndex = list.length - 2;  inverseIndex > index + 1; inverseIndex--) {
        const currentlast = list[inverseIndex];
        const currentSum = currentlast + current;
        if(currentSum < minSum) {
            minSum = currentSum;
        }
    }
  }
  return minSum;
};

console.log(minimunCost([5, 3, 2, 4, 6, 1, 8, 3]), 3);
console.log(minimunCost([5,2,2,1,1,2,4,5,6,2,1,9]), 3);
