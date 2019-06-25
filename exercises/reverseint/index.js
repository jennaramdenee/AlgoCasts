// --- Directions
// Given an integer, return an integer that is the reverse
// Note the positive / negative (sign) of the number!
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Option 1: Turn number into a string and reverse, preserving sign
function reverseInt(n) {
  // Returns either 1 or -1
  const sign = Math.sign(n);
  const reverseString = n.toString().split("").reverse().join("")

  return parseInt(reverseString) * sign
}

module.exports = reverseInt;
