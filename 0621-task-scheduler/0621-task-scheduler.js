/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let taskMap = new Map();

  let maxNum = 0;

  let maxNumCount = 0;

  for (let task of tasks) {
    let taskCount = taskMap.has(task) ? taskMap.get(task) + 1 : 1;

    taskMap.set(task, taskCount);

    if (taskCount > maxNum) {
      maxNum = taskCount;
      maxNumCount = 1;

    } else if (taskCount === maxNum) {
      maxNumCount++;
    }
  }

  return Math.max(tasks.length, (maxNum - 1) * (n + 1) + maxNumCount);

};
