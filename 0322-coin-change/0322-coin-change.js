/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const orderedCoins = coins.sort((a,b) => a- b);
  let currentCoin = orderedCoins[coins.length - 1];
  let currentAmount = amount;
  let countCoins = 0;
  let i = 1;

  while (currentCoin) {
    currentCoin = orderedCoins[coins.length - i];

    if (currentAmount === 0) {
      return countCoins;
    }

    if (currentAmount < orderedCoins[0]) {
      currentAmount = amount;

      i--;
      continue;
    }

    getDivedeAmount(currentCoin, currentAmount);

    i++;
  }

  function getDivedeAmount(coin, leftAmount) {
    countCoins += Math.trunc(leftAmount / coin);
    currentAmount = leftAmount % coin;
  }

  return -1;
};