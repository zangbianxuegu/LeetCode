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


// 1) 
// similar to 0329
// 先做的 0329，然后照着做这道，依然做了很久，先是没有想到将 O 改为另一个字母，按照深度优先递归。一个问题是，前一个 O 找到周围的一个 O，接下来这个 O 又会找到前一个 O，从而形成无限循环，递归调用栈溢出，于是想办法避免前一个找到后面的之后后面的再查找前一个，于是越搞越复杂……最后参考 Discuss 总高票第一个方法：
// https://leetcode.com/problems/surrounded-regions/discuss/41612/A-really-simple-and-readable-C%2B%2B-solutionuff0conly-cost-12ms
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = (board) => {
  if (board && board.length) {
    let m = board.length
    let n = board[0].length
    let dirs = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ]
    for (let i = 1; i < m - 1; i++) {
      for (let j = 1; j < n - 1; j++) {
        if (board[i][j] === 'O') {
          let s = ''
          if (dfs(i, j)) {
            s = 'X'
          } else {
            s = 'O'
          }
          for (let i = 1; i < m - 1; i++) {
            for (let j = 1; j < n - 1; j++) {
              if (board[i][j] === 'B') {
                board[i][j] = s
              }
            }
          }
        }
      }
    }
    function dfs(i, j) {
      board[i][j] = 'B'
      let res = true
      for (dir of dirs) {
        let x = i + dir[0]
        let y = j + dir[1]
        if (board[x][y] === 'O') {
          if (x === 0 || x === m - 1 || y === 0 || y === n - 1) {
            res = false
          } else {
            res = res && dfs(x, y)
          }
        }
      }
      return res
    }
  }
}
// Runtime: 92 ms, faster than 37.57% of JavaScript online submissions for Surrounded Regions.
// Memory Usage: 48.7 MB, less than 100.00% of JavaScript online submissions for Surrounded Regions.
