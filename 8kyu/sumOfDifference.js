// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
    // Sort the array in descending order
    arr.sort(function(a, b) {
      return b - a;
    });
  
    let sum = 0;
    // Calculate the differences between consecutive pairs of numbers
    for (let i = 0; i < arr.length - 1; i++) {
      sum += arr[i] - arr[i + 1];
    }
  
    // Return the sum of differences
    return sum;
  }
  