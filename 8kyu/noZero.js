/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/

function noBoringZeros(number) {
  
    if (number === 0) {
      return number;
    }
  
    // Remove trailing zeros using division and multiplication
    while (number % 10 === 0) {
      number = number / 10;
    }
  
    return number;
    
  }