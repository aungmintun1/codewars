// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

function pipeFix(array){
  
    var newArr = [];
    var lastIndex = array[array.length - 1];  
    
    var firstIndex = array[0];      
    var newElement = array[0];
      
    for(var i = firstIndex; i <= lastIndex; i++){
          
      newArr.push(newElement);
      newElement += 1;
    }
    
    return newArr;
    }