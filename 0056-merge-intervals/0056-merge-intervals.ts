function merge(intervals: number[][]): number[][] {
  const result: number[][] = [];
  let standby: number[] = [];

  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length; i++) {
    if (standby.length === 0) {
      standby = intervals[i];
    } else {
      if (intervals[i][0] <= standby[1] && intervals[i][1] >= standby[1]) {
        if (i === intervals.length - 1) {
          standby[1] = intervals[i][1];

          result.push(standby);
        }

        standby[1] = intervals[i][1];
      } else if (intervals[i][0] <= standby[1]) {
        if (i === intervals.length - 1) {
          result.push(standby);
        }
      }  else if (intervals[i][0] >= standby[1]) {
        if (i === intervals.length - 1) {
          result.push(standby);
          result.push(intervals[i]);
        } else {
          result.push(standby);

          standby = intervals[i];
        }
      }
    }
  }

  return result;
};