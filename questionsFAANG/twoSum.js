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
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[] | null}
 */
function twoSum(nums, target) {
  return null;
}

/**
 * Brute-force reference solution.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[] | null}
 */
function findTwoSums(nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numberToFind = target - nums[p1];

    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (numberToFind === nums[p2]) {
        return [p1, p2];
      }
    }
  }

  return null;
}

for (const { nums, target, expected } of testCases) {
  const result = twoSum(nums, target);
  console.log({ result, expected });
}

module.exports = { twoSum, testCases };
