# Two Sum

## Difficulty

Easy

## Topics

- Arrays
- Hash Table

## Problem

Given an array of integers `nums` and an integer `target`, return the indices of two numbers whose sum equals `target`.

Assumptions:

- Each input has exactly one valid pair.
- The same array element cannot be used twice.
- The answer can be returned in either valid order.

## Examples

### Example 1

- Input: `nums = [2, 7, 11, 15]`, `target = 9`
- Output: `[0, 1]`
- Explanation: `nums[0] + nums[1] = 2 + 7 = 9`

### Example 2

- Input: `nums = [3, 2, 4]`, `target = 6`
- Output: `[1, 2]`
- Explanation: `nums[1] + nums[2] = 2 + 4 = 6`

### Example 3

- Input: `nums = [3, 3]`, `target = 6`
- Output: `[0, 1]`
- Explanation: Both indices refer to separate elements, and `3 + 3 = 6`

## Test Cases

- Standard match: `[2, 7, 11, 15]`, target `9`
- Match after the first element: `[3, 2, 4]`, target `6`
- Duplicate values: `[3, 3]`, target `6`
- Empty array: `[]`, target `1`
- Single element: `[5]`, target `5`
- No valid pair: `[1, 3, 7, 9, 2]`, target `25`

## Approach 1: Brute Force

Check each pair of distinct elements and return the pair whose sum equals the target.

For each index `p1`:

1. Calculate `numberToFind = target - nums[p1]`.
2. Search indices after `p1` for `numberToFind`.
3. Return `[p1, p2]` when the value is found.
4. Return `null` if no pair is found.

This example has an answer of `[2, 4]`:

```text
nums   = [1, 3, 7, 9, 2]
target = 11

p1 = 2  nums[p1] = 7
numberToFind = 11 - 7 = 4
p2 = 4  nums[p2] = 2
7 + 2 = 9  // keep searching

p1 = 3  nums[p1] = 9
numberToFind = 11 - 9 = 2
p2 = 4  nums[p2] = 2
9 + 2 = 11

Answer: [3, 4]
```

### Complexity

- Time: $O(n^2)$
- Space: $O(1)$

## Approach 2: Hash Table

Store each number's index as it is visited. Before inserting a number, check whether `target - number` has already been seen.

This is the more efficient implementation for large arrays.

### Complexity

- Time: $O(n)$
- Space: $O(n)$
