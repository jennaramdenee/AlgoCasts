// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// The same technique can be used in questions such as:
// - What is the most common character in the string
// - Does A have the same characters as string B (anagram)
// - Does the given string have any repeated characters in it

// Option 1: Create an object, with each char as key
// and the number of times that appears as value

function maxChar(str) {
  let letterMap = {};
  let max = 0;
  let maxLetter = "";

  // Create map
  for(let letter of str) {
    if(!letterMap[letter]) {
      letterMap[letter] = 1
    } else {
      letterMap[letter]++
    }
  }

  // Find highest value
  for(letter in letterMap) {
    if(letterMap[letter] > max) {
      max = letterMap[letter]
      maxLetter = letter
    }
  }

  return maxLetter
}

module.exports = maxChar;
