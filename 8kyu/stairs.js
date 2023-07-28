// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"
// or printed:

// I
//  I
//   I

function drawStairs(n) {
    var result = '';
    for (var i = 0; i < n; i++) {
      var spaces = ' '.repeat(i);
      result += spaces + 'I' + '\n';
    }
    return result.trim(); // Trim to remove the trailing newline
  }