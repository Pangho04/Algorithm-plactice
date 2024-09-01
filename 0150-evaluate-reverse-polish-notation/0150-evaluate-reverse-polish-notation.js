/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const operators = ["+", "-", "*", "/"];
  let lastVal = null;

  for (let i = 0; i < tokens.length; i++) {
    if (operators.includes(tokens[i])) {
      lastVal = getCalc(tokens[i - 2], tokens[i - 1], tokens[i]);

      tokens.splice(i - 2, 3, lastVal);

      i = 1;
    } else {
      lastVal = Number(tokens[i]);
    }
  }

  function getCalc(a, b, operator) {
    const numA = Number(a);
    const numB = Number(b);

    switch (operator) {
      case "+":
        return numA + numB;

      case "-":
        return numA - numB;

      case "*":
        return numA * numB;

      case "/":
        return Math.trunc(a / b);

      default:
        break;
    }
  }

  return lastVal;
};