/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const courseGraph = Array.from({ length: numCourses }, () => []);
  const connection = Array(numCourses).fill(0);
  const preCourses = [];
  let doneCourses = 0;

  for (const [a, b] of prerequisites) {
    courseGraph[b].push(a);

    connection[a]++;
  }

  for (let i = 0; i < numCourses; i++) {
    if (connection[i] === 0) {
      preCourses.push(i);
    }
  }

  while (preCourses.length > 0) {
    const currentCourse = preCourses.shift();

    doneCourses++;

    for (const nextCourse of courseGraph[currentCourse]) {
      connection[nextCourse]--;

      if (connection[nextCourse] === 0) {
        preCourses.push(nextCourse);
      }
    }

  }

  return doneCourses === numCourses;
};