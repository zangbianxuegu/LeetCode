// The demons had captured the princess(P) and imprisoned her in the bottom - right corner of a dungeon.The dungeon consists of M x N rooms laid out in a 2D grid.Our valiant knight(K) was initially positioned in the top - left room and must fight his way through the dungeon to rescue the princess.

// The knight has an initial health point represented by a positive integer.If at any point his health point drops to 0 or below, he dies immediately.

// Some of the rooms are guarded by demons, so the knight loses health(negative integers) upon entering these rooms; other rooms are either empty(0's) or contain magic orbs that increase the knight's health(positive integers).

// In order to reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.

 
// Write a function to determine the knight's minimum initial health so that he is able to rescue the princess.

// For example, given the dungeon below, the initial health of the knight must be at least 7 if he follows the optimal path RIGHT -> RIGHT -> DOWN -> DOWN.

// -2(K)  -3  	3
// -5     -10	  1
// 10	    30    -5(P)

// Note:

// The knight's health has no upper bound.
// Any room can contain threats or power - ups, even the first room the knight enters and the bottom - right room where the princess is imprisoned.


// 1) 动态规划
// 地牢的每一个格子中需要的生命值 dungeon[i][j]，至少保持生命值为 1
// 终点右下角需要 1 - dungeon[m - 1][n - 1] : 1
// 最右一列：dungeon[i][j] = dungeon[i][j + 1] - dungeon[i][j]
// 最下一行：dungeon[i][j] = dungeon[i + 1][j] - dungeon[i][j]
// 其他中间：dungeon[i][j] = Math.min(dungeon[i + 1][j] - dungeon[i][j], dungeon[i][j + 1] - dungeon[i][j])

// -2  -3   3
// -5  -10  1
//  10  30 -5

// 7    5    2 
// 6    11   5
// 1    1    6

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
const calculateMinimumHP = (dungeon) => {
  if (!dungeon.length || !dungeon[0].length) {
    return 1
  }
  let m = dungeon.length
  let n = dungeon[0].length
  dungeon[m - 1][n - 1] = 1 - dungeon[m - 1][n - 1] > 1 ? 1 - dungeon[m - 1][n - 1] : 1
  for (let i = m - 1; i > -1; i--) {
    for (let j = n - 1; j > -1; j--) {
      if (!(i === m - 1 && j === n - 1)) {
        if (i === m - 1) {
          dungeon[i][j] = dungeon[i][j + 1] - dungeon[i][j] > 0 ? dungeon[i][j + 1] - dungeon[i][j] : 1
        } else if (j === n - 1) {
          dungeon[i][j] = dungeon[i + 1][j] - dungeon[i][j] > 0 ? dungeon[i + 1][j] - dungeon[i][j] : 1
        } else {
          let a = dungeon[i + 1][j] - dungeon[i][j] > 0 ? dungeon[i + 1][j] - dungeon[i][j] : 1
          let b = dungeon[i][j + 1] - dungeon[i][j] > 0 ? dungeon[i][j + 1] - dungeon[i][j] : 1
          dungeon[i][j] = Math.min(a, b)
        }
      }
    }
  }
  return dungeon[0][0]
}

// console.log(calculateMinimumHP([[-2, -3, 3], [-5, -10, 1], [10, 30, -5]]));
// console.log(calculateMinimumHP([[-2, -3, 3]]));
// console.log(calculateMinimumHP([[-2]]));
// console.log(calculateMinimumHP([[]]));
// console.log(calculateMinimumHP([]));

// Runtime: 52 ms, faster than 94.12 % of JavaScript online submissions for Dungeon Game.
// Memory Usage: 35.1 MB, less than 100.00 % of JavaScript online submissions for Dungeon Game.