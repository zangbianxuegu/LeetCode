// There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

// Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.

// Note:

// If there exists a solution, it is guaranteed to be unique.
// Both input arrays are non-empty and have the same length.
// Each element in the input arrays is a non-negative integer.
// Example 1:

// Input: 
// gas  = [1,2,3,4,5]
// cost = [3,4,5,1,2]

// Output: 3

// Explanation:
// Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 4. Your tank = 4 - 1 + 5 = 8
// Travel to station 0. Your tank = 8 - 2 + 1 = 7
// Travel to station 1. Your tank = 7 - 3 + 2 = 6
// Travel to station 2. Your tank = 6 - 4 + 3 = 5
// Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
// Therefore, return 3 as the starting index.

// Example 2:

// Input: 
// gas  = [2,3,4]
// cost = [3,4,3]

// Output: -1

// Explanation:
// You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
// Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 0. Your tank = 4 - 3 + 2 = 3
// Travel to station 1. Your tank = 3 - 3 + 3 = 3
// You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
// Therefore, you can't travel around the circuit once no matter where you start.


// 1)
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = (gas, cost) => {
  let n = gas.length
  let tank = 0
  for (let i = 0; i < n; i++) {
    if (gas[i] >= cost[i]) {
      if (n === 1) {
        return 0
      }
      tank = gas[i] - cost[i]
      let j
      if (i === n - 1) {
        j = 0
      } else {
        j = i + 1
      }      
      while (j > i && j < n || j >= 0 && j < i) {
        if (tank + gas[j] >= cost[j]) {
          tank = tank + gas[j] - cost[j]
        } else {
          break
        }
        if (j === i - 1 || i === 0 && j === n - 1) {
          return i
        }
        j++
        if (j === n) {
          j = 0
        }
      }
    }
  }
  return -1
}
// console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
// console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
// console.log(canCompleteCircuit([3, 1, 1], [1, 2, 2]));
// console.log(canCompleteCircuit([5], [4]));
// Runtime: 96 ms, faster than 37.14% of JavaScript online submissions for Gas Station.
// Memory Usage: 34.9 MB, less than 33.33% of JavaScript online submissions for Gas Station.


// 2)
// gas 总数小于 cost 总数，不可能到达终点
// 如果从位置 A 开始不能达到位置 B，则 A 到 B 之间的任何位置不能达到 B，从 B + 1 位置开始寻求路径
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = (gas, cost) => {
  let sGas = gas.reduce((sum, item) => sum + item, 0)
  let sCost = cost.reduce((sum, item) => sum + item, 0)
  if (sGas < sCost) {
    return -1
  }
  let n = gas.length
  let tank = 0
  let l = 0
  for (let i = 0; i < n; i++) {
    tank += gas[i] - cost[i]
    if (tank < 0) {
      tank = 0
      l = i + 1
    }
  }
  return l
}
// Runtime: 56 ms, faster than 78.44% of JavaScript online submissions for Gas Station.
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions for Gas Station.