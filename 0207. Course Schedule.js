// There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
//              To take course 1 you should have finished course 0. So it is possible.

// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
//              To take course 1 you should have finished course 0, and to take course 0 you should
//              also have finished course 1. So it is impossible.

// Constraints:

// The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
// You may assume that there are no duplicate edges in the input prerequisites.
// 1 <= numCourses <= 10^5


// 1) Map
// ! 面向测试用例编程，没有很好的思路
// ? 参数 numCourses 并没有什么卵用啊？？
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  const map = new Map(prerequisites)
  for (const [key, value] of prerequisites) {
    let pre = value
    let arr = [key]
    while (pre || pre === 0) {
      if (arr.includes(pre)) {
        return false
      }
      arr.push(pre)
      pre = map.get(pre)
    }
  }
  return true
}
// Runtime: 1472 ms, faster than 5.09% of JavaScript online submissions for Course Schedule.
// Memory Usage: 43.6 MB, less than 20.65% of JavaScript online submissions for Course Schedule.

// Test case:
// console.log(canFinish(2, [[0, 1]]));
// console.log(canFinish(2, [[0, 1], [1, 0]]));
// console.log(canFinish(2, [[1,0],[0,2],[2,1]]));
// console.log(canFinish(2, [[1,0],[2,0],[0,2]]));
// console.log(canFinish(2, [[1,0],[1,2],[0,1]]));


// 2) Topological BFS
// similar: 0210
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  const inDegrees = Array(numCourses).fill(0)  
  const graph = buildGraph(numCourses, prerequisites)
  const queue = []
  for (const [v] of prerequisites) {    
    inDegrees[v]++
  }  
  for (let i = 0; i < inDegrees.length; i++) {
    if (inDegrees[i] === 0) {
      queue.push(i)
    }
  }
  function buildGraph (num, prerequisites) {
    const graph = Array(num).fill(null)
    for (const [v, u] of prerequisites) {
      if (!graph[u]) {
        graph[u] = [v]
      } else {
        graph[u].push(v)
      }
    }
    return graph
  }
  while (queue.length) {
    const cur = queue.shift()
    numCourses--
    if (graph[cur]) {
      for (const v of graph[cur]) {      
        inDegrees[v]--
        if (inDegrees[v] === 0) {
          queue.push(v)
        }
      }
    }
  }
  return numCourses === 0
}
// Runtime: 136 ms, faster than 29.00% of JavaScript online submissions for Course Schedule.
// Memory Usage: 44.2 MB, less than 17.85% of JavaScript online submissions for Course Schedule.