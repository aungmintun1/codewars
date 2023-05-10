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