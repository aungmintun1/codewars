// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.
//Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.
//hello 
function derive(coefficient,exponent) {
  

  let result = coefficient * exponent;
  let newExponent = exponent - 1;
  if (newExponent === 1) {
    return `${result}x^1`;
  } else if (newExponent === 0) {
    return `${result}`;
  } else {
    return `${result}x^${newExponent}`;
  }




}
