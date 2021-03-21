/*Swap all elements in pairs. If the length of the list is odd, the last element stays
in place. [2,7,8,3,1,4] Returns [7,2,3,8,4,1] [3,6,8,1,5] Returns [6,3,1,8,5]*/

const swapPairs = (list) => {
  if (!Array.isArray(list) || list.length === 0) {
    return [];
  }
  if (list.length === 1) {
    return list;
  }
  const limit = list.length % 2 === 0 ? list.length : list.length - 1;
  for (let index = 0; index < limit; index += 2) {
    const temporary = list[index];
    list[index] = list[index + 1];
    list[index + 1] = temporary;
  }

  return list;
};

console.log([2, 7, 8, 3, 1, 4], swapPairs([2, 7, 8, 3, 1, 4]));
console.log([2, 7, 8, 3, 1, 4, 5], swapPairs([2, 7, 8, 3, 1, 4, 5]));
