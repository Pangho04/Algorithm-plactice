/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];

  for (const str of s) {
    if (str !== "]") {
      stack.push(str);
    } else {
      let curStr = stack.pop();
      let word = "";

      while (curStr !== "[") {
        word = curStr + word;
        curStr = stack.pop();
      }

      let times = "";
      curStr = stack.pop();
    
      while (!Number.isNaN(+curStr)) {
        times = curStr + times;
        curStr = stack.pop();
      }
      
      if (curStr) { stack.push(curStr);}
      stack.push(word.repeat(+times));
    }
  }

  return stack.join("");
};
