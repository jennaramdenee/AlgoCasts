// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Not great to hard code capitalize the first letter each time
// Doesn't work for Spanish, like ?Que tal? because can't capitalize a special character

function capitalize(str) {
  let words = str[0].toUpperCase();

  for(let i = 1; i < str.length; i++) {
    // if letter to the left is a space
    if(str[i-1] === ' ') {
      words += str[i].toUpperCase();
    } else {
      words += str[i]
    }
  }

  return words
}

// function capitalize(str) {
//   const words = str.split(' ')
//   let capitalizedWords = []
//
//   for(let word of words) {
//     capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
//   }
//
//   return capitalizedWords.join(' ')
// }

module.exports = capitalize;
