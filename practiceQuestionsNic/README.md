# JavaScript interview practice

20 short practice questions for live coding sessions with your tutor. Work through them in order, or pick one per session. Each should take 20 minutes or less. No solutions are included.

The questions come from the preceding practice list. The examples and explicit rules below make each exercise self-contained; the bakery questions are simplified practice scenarios, not a transcription of the original interview screenshot.

## How to practise

- 0–2 minutes: read the prompt and clarify requirements.
- 2–4 minutes: explain your approach aloud.
- 4–14 minutes: write your JavaScript solution.
- 14–17 minutes: test examples and edge cases.
- 17–20 minutes: explain time and space complexity.

Ask your tutor to act as an interviewer. For every question, be ready to explain your choices, discuss empty inputs and duplicates where relevant, and describe possible improvements. Unless stated otherwise, assume valid inputs. Agree whether input mutation is acceptable before coding.

## Level 1: Build momentum

Target: 5–10 minutes each.

### 1. Sort Numbers

**Interview prompt:** Write `sortNumbers(numbers)` to return the numbers in ascending numerical order. Values may include negatives and duplicates. Return an empty array for empty input.

**Sample input:** `[8, 3, 12, 1, 5]`

**Expected output:** `[1, 3, 5, 8, 12]`

**Additional case:** `[10, -2, 2, 10]` → `[-2, 2, 10, 10]`

**Interviewer follow-up:** What behaviour does JavaScript's default sort use for numbers?

### 2. Find the Second Largest

**Interview prompt:** Write `secondLargest(numbers)` to return the second-largest distinct number. Return `null` if fewer than two distinct numbers exist.

**Sample input:** `[8, 3, 12, 12, 5]`

**Expected output:** `8`

**Additional cases:** `[4, 4]` → `null`; `[-5, -1, -3]` → `-3`

**Interviewer follow-up:** Can you solve this without sorting?

### 3. Remove Duplicates

**Interview prompt:** Write `uniqueNumbers(numbers)` to return each number once, preserving its first appearance in the input.

**Sample input:** `[3, 1, 3, 5, 1, 7]`

**Expected output:** `[3, 1, 5, 7]`

**Additional case:** `[]` → `[]`

**Interviewer follow-up:** Does your approach preserve the original order?

### 4. Sort Employees

**Interview prompt:** Write `sortEmployees(employees)` to sort employee objects by salary, highest first. Keep employees with equal salaries in their original relative order.

**Sample input:** `[{name: "Ava", salary: 60000}, {name: "Ben", salary: 80000}, {name: "Cara", salary: 60000}]`

**Expected output:** `[{name: "Ben", salary: 80000}, {name: "Ava", salary: 60000}, {name: "Cara", salary: 60000}]`

**Interviewer follow-up:** How would you change the requirement to break salary ties alphabetically?

### 5. Find Two Numbers

**Interview prompt:** Write `hasPairWithSum(numbers, target)` to return whether two elements at different indices add up to the target. Equal values can form a pair if they occur twice.

**Sample input:** `numbers = [3, 8, 4, 6], target = 10`

**Expected output:** `true`

**Additional cases:** `([5], 10)` → `false`; `([5, 5], 10)` → `true`

**Interviewer follow-up:** How do you ensure you do not reuse the same element?

## Level 2: Common interview patterns

Target: 10–15 minutes each.

### 6. Move Zeros

**Interview prompt:** Write `moveZeros(numbers)` to move all zeros to the end while preserving the relative order of nonzero values. Return the resulting array.

**Sample input:** `[0, 3, 0, 5, 1]`

**Expected output:** `[3, 5, 1, 0, 0]`

**Additional case:** `[0, 0]` → `[0, 0]`

**Interviewer follow-up:** Could you modify the array in place with constant extra space?

### 7. Find Missing Number

**Interview prompt:** Write `findMissingNumber(numbers, n)`. The array contains every integer from `1` to `n` exactly once except for one missing value. The input may be unsorted. Return the missing value.

**Sample input:** `numbers = [4, 1, 5, 2], n = 5`

**Expected output:** `3`

**Additional case:** `([], 1)` → `1`

**Interviewer follow-up:** What assumptions make your approach valid?

### 8. Merge Sorted Arrays

**Interview prompt:** Write `mergeSortedArrays(first, second)` to merge two arrays already sorted in ascending order into one sorted array. Keep duplicates.

**Sample input:** `first = [1, 4, 7], second = [2, 3, 8]`

**Expected output:** `[1, 2, 3, 4, 7, 8]`

**Additional case:** `([1, 2], [2, 3])` → `[1, 2, 2, 3]`

**Interviewer follow-up:** Can you take advantage of the inputs already being sorted?

### 9. Most Frequent Number

**Interview prompt:** Write `mostFrequentNumber(numbers)` to return the most frequent number. If multiple numbers share the highest frequency, return the one that first appears in the input. Return `null` for empty input.

**Sample input:** `[4, 2, 4, 3, 2, 4]`

**Expected output:** `4`

**Additional case:** `[7, 2, 2, 7]` → `7`

**Interviewer follow-up:** How do you enforce the tie-breaking rule?

### 10. Find Maximum Profit

**Interview prompt:** Write `maxProfit(prices)` for daily stock prices in chronological order. You may buy once and sell once on a later day. Return the maximum profit, or `0` if no profitable trade is possible. Fewer than two days also returns `0`.

**Sample input:** `[7, 1, 5, 3, 6, 4]`

**Expected output:** `5`

**Additional case:** `[9, 7, 4, 1]` → `0`

**Interviewer follow-up:** Why does chronological order matter?

### 11. Group Orders

**Interview prompt:** Write `totalSpendingByCustomer(orders)` to return an object mapping each customer ID to their total order amount. IDs are strings and amounts are non-negative integers. Return `{}` for no orders.

**Sample input:** `[{customerId: "A", amount: 40}, {customerId: "B", amount: 25}, {customerId: "A", amount: 15}]`

**Expected output:** `{A: 55, B: 25}`

**Interviewer follow-up:** How would the output change if callers needed an array instead?

### 12. Longest Increasing Streak

**Interview prompt:** Write `longestIncreasingStreak(numbers)` to return the length of the longest contiguous, strictly increasing sequence. Equal neighbouring values break a streak. Return `0` for empty input.

**Sample input:** `[1, 2, 2, 3, 4, 1]`

**Expected output:** `3`

**Additional cases:** `[5, 4, 3]` → `1`; `[]` → `0`

**Interviewer follow-up:** How is a contiguous streak different from a subsequence?

## Level 3: Business scenarios

Target: 10–20 minutes each.

### 13. Bakery Profit, Simplified

**Interview prompt:** Write `maxBakeryProfit(preparationCosts, salePrices)`. Both arrays have the same length and represent consecutive days. Prepare one batch on day `i` for `preparationCosts[i]` and sell it on a strictly later day `j` for `salePrices[j]`. Return the highest possible profit, or `0` if no profitable choice exists. You may choose not to prepare a batch.

**Sample input:** `preparationCosts = [6, 2, 8, 4], salePrices = [5, 7, 3, 10]`

**Expected output:** `8`

**Additional case:** `([5], [10])` → `0`, because same-day sales are not allowed.

**Interviewer follow-up:** How will you ensure preparation always happens before the sale?

### 14. Bakery Profit, 5-Day Rule

**Interview prompt:** Write `maxBakeryProfitWithDelay(preparationCosts, salePrices)`, extending question 13. A batch prepared on index `i` can only be sold on index `j` where `j - i >= 5`. Return the maximum profit, or `0` if no profitable valid pair exists. Both arrays have equal length.

**Sample input:** `preparationCosts = [8, 2, 9, 9, 9, 9, 9], salePrices = [1, 1, 1, 1, 1, 10, 12]`

**Expected output:** `10`

**Additional case:** `([1, 1, 1, 1, 1], [9, 9, 9, 9, 9])` → `0`, because no pair is five days apart.

**Interviewer follow-up:** Which preparation days are eligible on a given sale day?

### 15. Best Sales Day

**Interview prompt:** Write `bestSalesDay(revenues)` to return the zero-based index of the day with the highest revenue. Return the earliest index for ties, or `-1` for empty input.

**Sample input:** `[120, 350, 200, 350]`

**Expected output:** `1`

**Additional case:** `[]` → `-1`

**Interviewer follow-up:** How does the tie rule affect your comparisons?

### 16. Discount Calculator

**Interview prompt:** Write `applyDiscount(prices)` to return a new array with a 20% discount applied only to prices strictly above €100. Leave prices of €100 or less unchanged. Round discounted prices to two decimal places and return numbers.

**Sample input:** `[50, 100, 150, 200]`

**Expected output:** `[50, 100, 120, 160]`

**Additional case:** `[125.99]` → `[100.79]`

**Interviewer follow-up:** What should you consider when working with monetary values in JavaScript?

### 17. Warehouse Inventory

**Interview prompt:** Write `finalInventory(changes)`. Each entry is `{productId, change}`, where positive values add stock and negative values remove it. Every product starts at zero. Return an object containing the final stock for every product mentioned, including products with zero stock. Product IDs are strings; assume stock never becomes negative.

**Sample input:** `[{productId: "A", change: 10}, {productId: "B", change: 5}, {productId: "A", change: -3}]`

**Expected output:** `{A: 7, B: 5}`

**Additional case:** `[{productId: "A", change: 2}, {productId: "A", change: -2}]` → `{A: 0}`

**Interviewer follow-up:** What would you need to change if stock could become negative?

### 18. Meeting Conflicts

**Interview prompt:** Write `hasMeetingConflict(meetings)` to return whether any meetings overlap. Each meeting is `[start, end]` using integer minutes on the same day, with `start < end`. Input may be unsorted. A meeting ending exactly when another starts is not a conflict.

**Sample input:** `[[60, 120], [90, 150], [180, 210]]`

**Expected output:** `true`

**Additional cases:** `[[60, 90], [90, 120]]` → `false`; `[]` → `false`

**Interviewer follow-up:** How would you handle a meeting completely contained within another?

### 19. Customer Transactions

**Interview prompt:** Write `topCustomer(transactions)` to return the ID of the customer with the highest total spending. Entries are `{customerId, amount}`, with string IDs and non-negative integer amounts. For tied totals, return the customer whose first transaction appears earliest. Return `null` for no transactions.

**Sample input:** `[{customerId: "A", amount: 40}, {customerId: "B", amount: 70}, {customerId: "A", amount: 50}]`

**Expected output:** `"A"`

**Additional case:** `[{customerId: "B", amount: 50}, {customerId: "A", amount: 50}]` → `"B"`

**Interviewer follow-up:** How could you reuse the requirements from question 11?

### 20. Best Delivery Window

**Interview prompt:** Write `bestDeliveryWindow(deliveries, k)` to find the consecutive window of exactly `k` hours with the highest total deliveries. Return `{startIndex, total}` using a zero-based index. For ties, choose the earliest window. Counts are non-negative integers. Return `null` if `k` is not a positive integer or exceeds the array length.

**Sample input:** `deliveries = [2, 5, 1, 8, 3], k = 2`

**Expected output:** `{startIndex: 3, total: 11}`

**Additional cases:** `([4, 4, 4], 2)` → `{startIndex: 0, total: 8}`; `([], 1)` → `null`

**Interviewer follow-up:** Can you avoid recalculating each window's total from scratch?
