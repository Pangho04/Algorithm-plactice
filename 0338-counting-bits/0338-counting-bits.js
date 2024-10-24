/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const arr = Array(n + 1);
  
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i.toString(2).replaceAll("0", "").length;
  }

  return arr;
};