/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const newIntervals = [];
    const mergedInterval = [];

    if (intervals.length === 0) {
        return [newInterval];
    }

    for (const interval of intervals) {
        if (interval[1] < newInterval[0] || interval[0] > newInterval[1]) {
        newIntervals.push(interval);
        } else if (interval[0] <= newInterval[0] && mergedInterval.length === 0) {
         mergedInterval.push(
        interval[0],
        newInterval[1] > interval[1] ? newInterval[1] : interval[1]); 
        } else if (interval[1] >= newInterval[1] && mergedInterval.length > 0) {
            if (mergedInterval[1] < interval[1]) {
                mergedInterval.pop();
                mergedInterval.push(interval[1]);
            }
        } else if (interval[0] > newInterval[0] && mergedInterval.length === 0) {
            mergedInterval.push(newInterval[0], newInterval[1] > interval[1] ? newInterval[1] : interval[1]); 
        }
    }

  if (mergedInterval.length === 0) {
    mergedInterval.push(...newInterval);
  }

  newIntervals.push(mergedInterval);

  return newIntervals.sort((a, b) => a[0] - b[0]);
};