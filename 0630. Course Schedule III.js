// There are n different online courses numbered from 1 to n. Each course has some duration(course length) t and closed on dth day. A course should be taken continuously for t days and must be finished before or on the dth day. You will start at the 1st day.

// Given n online courses represented by pairs (t,d), your task is to find the maximal number of courses that can be taken.

// Example:

// Input: [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]

// Output: 3

// Explanation:

// There're totally 4 courses, but you can take 3 courses at most:
// First, take the 1st course, it costs 100 days so you will finish it on the 100th day, and ready to take the next course on the 101st day.
// Second, take the 3rd course, it costs 1000 days so you will finish it on the 1100th day, and ready to take the next course on the 1101st day.
// Third, take the 2nd course, it costs 200 days so you will finish it on the 1300th day.
// The 4th course cannot be taken now, since you will finish it on the 3300th day, which exceeds the closed date.

// Note:

// The integer 1 <= d, t, n <= 10,000.
// You can't take two courses simultaneously.


// 1) recursion
/**
 * @param {number[][]} courses
 * @return {number}
 */
const scheduleCourse = (courses) => {
  const n = courses.length
  courses.sort((a, b) => a[1] - b[1])
  return helper(courses, 0, 0)
  function helper (courses, curDay, index) {
    if (index === n) {
      return 0
    }
    const [t, d] = courses[index]
    let taken = 0
    let notTaken = 0
    if (curDay + t <= d) {
      taken = helper(courses, curDay + t, index + 1) + 1
    }
    notTaken = helper(courses, curDay, index + 1)
    return Math.max(taken, notTaken)
  }
}


// 2)
/**
 * @param {number[][]} courses
 * @return {number}
 */
const scheduleCourse = (courses) => {
  courses.sort((a, b) => a[1] - b[1])
  let res = 0
  const n = courses.length
  const cache = [...Array(n + 1)].map(() => Array(courses[n - 1][1]))  
  return helper(courses, 0, 0, cache)
  function helper (courses, curDay, index, cache) {
    if (index === n) {
      return 0
    }
    if (cache[index][curDay]) {
      return cache[index][curDay]
    }
    const [t, d] = courses[index]
    let taken = 0
    let notTaken = 0
    if (curDay + t <= d) {
      taken = helper(courses, curDay + t, index + 1, cache) + 1
    }
    notTaken = helper(courses, curDay, index + 1, cache)
    cache[index][curDay] = Math.max(taken, notTaken)
    return cache[index][curDay]
  }
}


// 3)
// https://leetcode.com/problems/course-schedule-iii/discuss/513455/javascript-sort-and-dp-explain-in-comments
/**
 * @param {number[][]} courses
 * @return {number}
 */
const scheduleCourse = (courses) => {
  if (!courses.length) return 0
  courses.sort(([t1, d1], [t2, d2]) => d2 - d1)
  let arr = Array(courses.length + 1).fill(-1)
  arr[0] = Number.MAX_SAFE_INTEGER
  let maxCount = 0
  for (let [t, d] of courses) {
    for (let i = maxCount + 1; i > 0; i--) {
      arr[i] = Math.max(arr[i], Math.min(arr[i - 1], d) - t)      
      if (arr[i] > -1 && i > maxCount) maxCount = i
    }
  }
  return maxCount
}