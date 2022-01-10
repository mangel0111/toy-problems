// Split the array in 3 sections and take the index numbers that give you the sum with the min value

const minimunCost = (list) => {
  let minSum = Infinity;

  for (let index = 1; index < list.length - 1; index++) {
    const current = list[index];

    for (
      let inverseIndex = list.length - 2;
      inverseIndex > index + 1;
      inverseIndex--
    ) {
      const currentlast = list[inverseIndex];
      const currentSum = currentlast + current;
      if (currentSum < minSum) {
        minSum = currentSum;
      }
    }
  }
  return minSum;
};

const optimizedMinimumCost = (listToModify, minSumAccumulated = Infinity) => {
  const list = [...listToModify];

  const remainingList = list.slice(1, list.length - 1);
  const firstMinValue = Math.min(...remainingList);

  if (firstMinValue >= minSumAccumulated) {
    return minSumAccumulated;
  }

  const indexOfMinValue = remainingList.indexOf(firstMinValue);
  const originalIndexOfMinValue = list.indexOf(firstMinValue);

  const listToTheRigth = remainingList.slice(
    indexOfMinValue + 2,
    remainingList.length
  );
  const lastMinValueToTheRight = Math.min(...listToTheRigth);

  const listToTheLeft = remainingList.slice(
    0,
    indexOfMinValue === 0 ? 0 : indexOfMinValue - 1
  );
  const lastMinValueToTheLeft = Math.min(...listToTheLeft);

  const lastMinValue =
    lastMinValueToTheRight < lastMinValueToTheLeft
      ? lastMinValueToTheRight
      : lastMinValueToTheLeft;

  const minSum = lastMinValue + firstMinValue;
  list[originalIndexOfMinValue] = Infinity;

  return optimizedMinimumCost(
    list,
    minSum < minSumAccumulated ? minSum : minSumAccumulated
  );
};

console.log(minimunCost([5, 3, 2, 4, 6, 1, 8, 3]), 3);
console.log(optimizedMinimumCost([5, 3, 2, 4, 6, 1, 8, 3]), 3);

console.log(minimunCost([5, 2, 2, 1, 1, 2, 4, 5, 6, 2, 1, 9]), 2);
console.log(optimizedMinimumCost([5, 2, 2, 1, 1, 2, 4, 5, 6, 2, 1, 9]), 2);

console.log(minimunCost([5, 2, 1, 4, 3, 6]), 4);
console.log(optimizedMinimumCost([5, 2, 1, 4, 3, 6]), 4);

console.log(minimunCost([5, 3, 2, 1, 2, 4, 7]), 4);
console.log(optimizedMinimumCost([5, 3, 2, 1, 2, 4, 7]), 4);

console.log(minimunCost([5, 2, 1, 0, 0, 2, 7]), 1);
console.log(optimizedMinimumCost([5, 2, 1, 0, 0, 2, 7]), 1);
