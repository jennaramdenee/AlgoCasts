// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u']
//   let count = 0
//
//   for(let letter of str) {
//     if(vowels.includes(letter.toLowerCase())){
//       count += 1
//     }
//   }
//   return count
// }

// ******** MORE CONDENSED SOLUTION ********
function vowels(str) {
  // g - don't stop at the first match
  // i - case insensitive
  // matches returns null or an array of matches
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0
}

module.exports = vowels;
