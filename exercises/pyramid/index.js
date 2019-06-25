// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  ' n = 3, h = 1, r = 1
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

// function pyramid(n) {
//   const levelLength = n * 2 - 1
//   const midPoint = Math.floor(levelLength / 2)
//
//   // for each row
//   for(let row = 0; row < n; row ++) {
//     // create an empty string
//     level = ''
//     // for each column (2n - 1)
//     for(let column = 0; column < levelLength; column ++) {
//       // Find the midpoint and put in a hash depending on the row
//       // The row will determine how many additional hashes you need to put
//       // e.g. on the first row (row = 0), we don't need to add any hashes on either side of the midPoint
//       // but on the second row (row = 1), we want to add one hash on either side of the midpoint
//       if(midPoint - row <= column && midPoint + row >= column) {
//         level += '#'
//       } else {
//         level += ' '
//       }
//     }
//     console.log(level)
//   }
// }

// ******* RECURSIVE SOLUTION *******
function pyramid(n, row = 0, level = '') {
  // All done with recursion
  if(n === row){
    return;
  }

  // Assume we are at the end of a level (level is the same as column)
  if(level.length === 2 * n - 1){
    console.log(level);
    // And move on to the next row
    return pyramid(n, row + 1)
  }

  // If we are not at the end of a level
  const midPoint = Math.floor((2 * n - 1)/ 2)

  let add;

  // Same logic as before
  if(midPoint - row <= level.length && midPoint + row >= level.length){
    add = '#';
  } else {
    add = ' ';
  }

  pyramid(n, row, level + add);
}

module.exports = pyramid;
