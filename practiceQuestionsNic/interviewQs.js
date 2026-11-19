// 1. Sort Numbers
// Selection sort: repeatedly remove the smallest remaining value.
// Time: O(n²); Space: O(n) because the input is not mutated.
function sortNumbers(numbers) {
  if (!numbers || numbers.length === 0) {
    return [];
  }

  const remaining = [...numbers];
  const sorted = [];

  while (remaining.length > 0) {
    let smallestIndex = 0;

    for (let i = 1; i < remaining.length; i++) {
      if (remaining[i] < remaining[smallestIndex]) {
        smallestIndex = i;
      }
    }

    sorted.push(remaining[smallestIndex]);
    remaining.splice(smallestIndex, 1);
  }

  return sorted;
}

// Merge sort: divide the array, sort each half, then merge in order.
// Time: O(n log n); Space: O(n).
function mergeSort(numbers) {
  if (!numbers || numbers.length <= 1) {
    return numbers ? [...numbers] : [];
  }

  const middleIndex = Math.floor(numbers.length / 2);
  const leftArray = mergeSort(numbers.slice(0, middleIndex));
  const rightArray = mergeSort(numbers.slice(middleIndex));
  const mergedArray = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      mergedArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < leftArray.length) {
    mergedArray.push(leftArray[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightArray.length) {
    mergedArray.push(rightArray[rightIndex]);
    rightIndex++;
  }

  return mergedArray;
}

console.log('sortNumbers:', sortNumbers([10, -2, 2, 10]));
console.log('mergeSort:', mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
