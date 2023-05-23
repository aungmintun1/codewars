

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  
    if (array.length === 0) {
      return 0;
    }
    
    var sum = 0;
    
    for (var i = 0; i < array.length; i++){
      
         sum+= array[i];
    }
    
    var average = sum / array.length;
    
    return average;
  }