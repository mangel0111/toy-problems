// Make change
// Input coins = [1,2,5], amount = 11
// Output [1,0,2]
// Explanation: 11 = 5 + 5 + 1

// Input coins = [2], amount= 3
//Output: -1

// Input: (coins = [1, 2, 5, 10, 25]), (amount = 33);
// Output: [1, 1, 1, 0, 1];
// Explanation: 33 = 25 + 5 + 2 + 1;

const getCoins = (difference, currentCoin, amount) => {};

const makeChange = (coins, amount) => {
  let change = new Array(coins.length).fill(0);
  let difference = amount;
  for (let index = coins.length - 1; index >= 0; index--) {
    const currentCoin = coins[index];
    let countOfCoins = 0;
    while (currentCoin <= difference) {
      countOfCoins++;
      difference -= currentCoin;
    }
    change[index] = countOfCoins;
  }
  if (difference !== 0) {
    return -1;
  }
  return change;
};

console.log("coins = [1,2,5], amount = 11", makeChange([1, 2, 5], 11));
console.log("coins = [2], amount = 33", makeChange([2], 3));
console.log(
  "coins = [1, 2, 5, 10, 25], amount = 11",
  makeChange([1, 2, 5, 10, 25], 33)
);
