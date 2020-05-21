// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1

// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

// 1) DFS
/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  if (!grid.length) {
    return 0
  }
  const n = grid.length
  const m = n && grid[0].length
  let res = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === '0') {
        continue
      }
      res++
      dfs(i, j)
    }
  }
  function dfs(i, j) {
    if (i < 0 || j < 0 || i === n || j === m) {
      return
    }
    if (grid[i][j] === '0') {
      return
    }
    grid[i][j] = '0'
    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }
  return res
}
const grid = [
  ['1', '1', '1'],
  ['0', '1', '0'],
  ['1', '1', '1'],
]
console.log(numIslands(grid))
