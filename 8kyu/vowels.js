// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut(str) {

    return str.split('').filter(function(char) {

      return !/[aeiou]/.test(char);

    }).join('');
/*
The split('') method is used to split the input string str into an array of individual characters.
The filter method is called on the array, and a callback function is provided. This function filters out the characters that match the regular expression /[aeiou]/, effectively removing the lowercase vowels from the array.
The join('') method is used to join the filtered array back into a string, without the removed lowercase vowels.
The resulting modified string is returned.
*/

  }