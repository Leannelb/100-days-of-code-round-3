/*
  Step 1: Verify the constraints
  - Are the numbers positive or negative?
  - Are there duplicate numbers?
  - Will there always be a solution?
  - What should happen if there is no solution?
  - Can there be multiple valid pairs?

  Step 2: Write out test cases
  - Best-case scenario
  - Edge cases like empty arrays and single-element arrays
  - Case where no solution exists

  Step 3: Get a working solution (any not even in code)
  - First try every combination of pairs, total them, does it equal the target?
  - to do that, start with the first number, compare it to all other numbers, and if those two added reach the target, you have a match.
  - This is the two pointer tequnique. point p1 at 1.

  Two Sum

  Problem:
  Given an array of integers nums and an integer target,
  return the indices of the two numbers whose sum equals target.

  Assumptions:
  - numbers are positive integers
  - there is exactly one valid pair for the provided input
  - you cannot use the same element twice
  - if no valid pair exists, return null
  - there will not be multiple valid pairs
*/

// Example cases
const testCases = [
  { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
  { nums: [3, 2, 4], target: 6, expected: [1, 2] },
  { nums: [3, 3], target: 6, expected: [0, 1] },
  { nums: [1, 3, 7, 9, 2], target: 11, expected: [3, 4] },
  { nums: [1, 3, 7, 9, 2], target: 25, expected: null },
  { nums: [], target: 1, expected: null },
  { nums: [5], target: 5, expected: null },
];

/**
 * TODO: Implement the solution here.
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[] | null}
 */
function twoSum(nums, target) {
  // Write your solution here
  return null;
}

/**
 * Brute-force reference solution:
 * Check every pair of distinct array elements until their sum equals the target.
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[] | null}
 */
function findTwoSums(nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (nums[p1] + nums[p2] === target) {
        return [p1, p2];
      }
    }
  }

  // No pair has a sum equal to the target.
  return null;
}

// Optional: quick validation while you work
for (const { nums, target, expected } of testCases) {
  const result = twoSum(nums, target);
  console.log({ nums, target, result, expected });
}

module.exports = { twoSum, testCases };
