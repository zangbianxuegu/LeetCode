// Given a date, return the corresponding day of the week for that date.

// The input is given as three integers representing the day, month and year respectively.

// Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.


// Example 1:

// Input: day = 31, month = 8, year = 2019
// Output: "Saturday"

// Example 2:

// Input: day = 18, month = 7, year = 1999
// Output: "Sunday"

// Example 3:

// Input: day = 15, month = 8, year = 1993
// Output: "Sunday"
 

// Constraints:

// The given dates are valid dates between the years 1971 and 2100.


/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
const dayOfTheWeek = (day, month, year) => {
  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return week[new Date(`${year}-${month}-${day}`).getDay()]
}
// Runtime: 68 ms, faster than 56.08% of JavaScript online submissions for Day of the Week.
// Memory Usage: 33.5 MB, less than 50.00% of JavaScript online submissions for Day of the Week.

