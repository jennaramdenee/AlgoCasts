// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Option 1: String to array, reverse and put back together
// function reverse(str) {
//   return str.split("").reverse().join("")
// }

// Option 2: Loop through letters - more manual, prone to errors
// function reverse(str) {
//   let reversed = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     reversed += str[i]
//   }
//   return reversed
// }
//
// function reverse(str) {
//   let reversed = "";
//   for (let letter of str) {
//     reversed = letter + reversed;
//   }
//   return reversed
// }

// Option 3: Use reduce

function reverse(str) {
  // Reduce takes starting argument, pass into arrow
  // Whatever is returned will be used as starting arg
  return str.split('').reduce((reversed, letter) => letter + reversed, '')
}

module.exports = reverse;
