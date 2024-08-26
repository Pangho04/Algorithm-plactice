
var MyQueue = function () {
  this.queStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.queStack = [...this.queStack, x];

  console.log(this.queStack)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const [popChar, ...leftChar] = [...this.queStack];

  if (leftChar) {
    this.queStack = leftChar;
  } else {
    this.queStack = [];
  }

  console.log("after pop:", this.queStack)

  return popChar;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  const [popChar, leftChar] = [...this.queStack];

  return popChar;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.queStack.length === 0) {
    return true;
  } else {
    return false;
  }
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */