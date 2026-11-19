// 1. Sort Numbers
// Selection Sort Solution (not fast)
// for of - need to then get the index
// Select one item at a time. With long arrays it takes time
// due to the double loop
// O(n2)

function sortNumbers(numbers) {
  if (!numbers || numbers.length == 0) {
    return [];
  }
  // for in - index
  let remaining = [...numbers];
  let sorted = [];

  while (remaining.length > 0) {
    let smallestNum = remaining[0];

    for (let n of remaining) {
      if (n < smallestNum) {
        smallestNum = n;
      }
    }
    sorted.push(smallestNum);
    let index = remaining.indexOf(smallestNum);
    remaining.splice(index, 1);
  }
  return sorted;
}

// console.log(sortNumbers([]));
// console.log(sortNumbers());
// console.log(sortNumbers([8, 3, 12, 1, 5]));
// console.log(sortNumbers([10, -2, 2, 10]));

// 1. Sort Numbers
// Selection Sort Solution (not fast) - ranked LOW as a solution.
// always O(n2)
// for in - you will have the index

function sortNumbers2(numbers) {
  if (!numbers || numbers.length == 0) {
    return [];
  }
  let array1 = [...numbers];
  let sorted = [];

  while (array1.length > 0) {
    let smallestIndex = 0;

    for (let i in array1) {
      if (array1[i] < array1[smallestIndex]) {
        smallestIndex = i;
      }
    }
    sorted.push(array1[smallestIndex]);
    array1.splice(smallestIndex, 1);
  }
  return sorted;
}

// console.log(sortNumbers2([]));
// console.log(sortNumbers2());
// console.log(sortNumbers2([10, -2, 2, 10]));

/* Built in sort method.
  selectionSort
  mergeSort O(logN)
  inserstionSort
*/

// Merge Sort
// Divide and conquer approach

function mergeSort(numbers) {
  // if theres only 1 item, you don't need to split - its already organised
  // always put the null check / last case first to stop unneccessary looping.
  // edge cases / best case (fastest) goes first
  if (numbers.length <= 1) {
    return numbers;
  }
  let middleIndex = Math.floor(numbers.length / 2);
  // it could be a decimal, we want to drop the decimal.
  // Math.floor() always rounds down.
  // we use a recursive function to keep splitting until array <= 1
  let leftArray = mergeSort(numbers.slice(0, middleIndex));
  let rightArray = mergeSort(numbers.slice(middleIndex));
  //console.log(leftArray, rightArray);

  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] <= rightArray[j]) {
      mergedArray.push(leftArray[i]);
      i++;
    } else {
      mergedArray.push(rightArray[j]);
      j++;
    }
  }
  while (i < leftArray.length) {
    mergedArray.push(leftArray[i]);
  }
  while (j < rightArray.lenght) {
    mergedArray.push(rightArray[j]);
  }
  console.log(mergedArray);
  return mergedArray;
}

console.log(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
