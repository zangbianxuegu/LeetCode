// There are a total of n courses you have to take, labeled from 0 to n-1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

// There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

// Example 1:

// Input: 2, [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished
//              course 0. So the correct course order is [0,1] .

// Example 2:

// Input: 4, [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,1,2,3] or [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both
//              courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
//              So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3] .

// Note:

// The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
// You may assume that there are no duplicate edges in the input prerequisites.


// 1) Topological BFS
// similar: 0207
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
  const inDegrees = Array(numCourses).fill(0)  
  const graph = buildGraph(numCourses, prerequisites)
  const queue = []
  const res = []
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
    res.push(cur)
    if (graph[cur]) {
      for (const v of graph[cur]) {      
        inDegrees[v]--
        if (inDegrees[v] === 0) {
          queue.push(v)
        }
      }
    }
  }
  return numCourses === 0 ? res : []
}
// Runtime: 100 ms, faster than 34.07% of JavaScript online submissions for Course Schedule II.
// Memory Usage: 40.7 MB, less than 33.28% of JavaScript online submissions for Course Schedule II.


// 2) Topological DFS
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
  const inDegrees = Array(numCourses).fill(0)  
  const graph = buildGraph(numCourses, prerequisites)
  const stack = []
  const res = []
  for (const [v] of prerequisites) {    
    inDegrees[v]++
  }  
  for (let i = 0; i < inDegrees.length; i++) {
    if (inDegrees[i] === 0) {
      stack.push(i)
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
  while (stack.length) {
    const cur = stack.pop()
    numCourses--
    res.push(cur)
    if (graph[cur]) {
      for (const v of graph[cur]) {      
        inDegrees[v]--
        if (inDegrees[v] === 0) {
          stack.push(v)
        }
      }
    }
  }
  return numCourses === 0 ? res : []
}
// Runtime: 156 ms, faster than 16.17% of JavaScript online submissions for Course Schedule II.
// Memory Usage: 42 MB, less than 22.43% of JavaScript online submissions for Course Schedule II.

// 3) simpler, but not efficient
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
  const inDegrees = Array(numCourses).fill(0)  
  const queue = []
  const res = []
  for (const [v] of prerequisites) {    
    inDegrees[v]++
  }  
  for (let i = 0; i < inDegrees.length; i++) {
    if (inDegrees[i] === 0) {
      queue.push(i)
    }
  }
  while (queue.length) {
    const cur = queue.shift()
    numCourses--
    res.push(cur)
    for (const [v, u] of prerequisites) {
      if (u === cur) {
        inDegrees[v]--
        if (inDegrees[v] === 0) {
          queue.push(v)
        }
      }   
    }
  }
  return numCourses === 0 ? res : []
}
// Runtime: 168 ms, faster than 15.43% of JavaScript online submissions for Course Schedule II.
// Memory Usage: 41.9 MB, less than 23.45% of JavaScript online submissions for Course Schedule II.