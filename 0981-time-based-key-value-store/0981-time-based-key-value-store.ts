class TimeMap {
  data;
  timestamps;

  constructor() {
    this.data = {};
    this.timestamps = {};
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.data[key]) {
      this.data[key] = {};
      this.timestamps[key] = [];
    };

    this.data[key][timestamp] = value;
    this.timestamps[key].push(timestamp);
  }

  get(key: string, timestamp: number): string {
    if (!this.data[key]) {
      return "";
    }

    if (this.data[key][timestamp]) {
      return this.data[key][timestamp];
    } else {
      const targetIndex = binarySearch(this.timestamps[key], timestamp);

      if (targetIndex === -1) {
        return "";
      }

      return this.data[key][this.timestamps[key][targetIndex]];
    }
  }
}

function binarySearch (array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    }
  }

  return right >= 0 ? right : -1;
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */