// Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// Example:

// X X X X
// X O O X
// X X O X
// X O X X
// After running your function, the board should be:

// X X X X
// X X X X
// X X X X
// X O X X
// Explanation:

// Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = (board) => {
  let m = board.length
  let n = board[0].length
  let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  let dp = [...Array(m)].map(() => Array(n).fill(true))
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (board[i][j] === 'O' && !dfs(i, j)) {
        board[i][j] = 'X'
      }
    }
  }
  function dfs (i, j) {
    if (dp[i][j]) {
      return dp[i][j]
    }
    let res = true
    for (let dir of dirs) {
      let x = i + dir[0]
      let y = j + dir[1]
      if (x > 0 && x < m - 1 && y > 0 && y < n - 1 && (board[x][y] === 'O' && !dfs(x, y) || board[x][y] === 'X')) {
        res = false
      }
    }
    dp[i, j] = res
    return res
  }
  return board
}
console.log(
  solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"]
  ])
);