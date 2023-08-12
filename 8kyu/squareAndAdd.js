function squareSum(numbers){
    return numbers.map(num => num * num) // Square each number
                 .reduce((acc, curr) => acc + curr, 0); // Sum all squared numbers
}

// Test the function
console.log(squareSum([1, 2, 3]));  // Expected output: 14 (1*1 + 2*2 + 3*3 = 14)
