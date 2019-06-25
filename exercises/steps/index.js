// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// ******* RECURSIVE SOLUTION *******
// This solution looks at each stair row in isolation
// n is the same as column
function steps(n, row = 0, stair = '') {
  // All work is done for every single row
  if(n === row){
    return;
  }

  // Assume we are at the end of a row so print out the string
  // And move on to the next row
  if(n === stair.length){
    console.log(stair)
    return steps(n, row + 1)
  }

  // All the work for creating a stair string
  if(stair.length <= row){
    stair += '#'
  } else {
    stair += ' '
  }

  // We still need to continue populating stair string for each column
  steps(n, row, stair)

}



// ******* MY SOLUTION *******
// function steps(n) {
//   for(let i = 1; i <= n; i++) {
//     console.log(generateHashString(i, n))
//   }
// }
//
// function generateHashString(hashCount, total) {
//   let hashString = ''
//   let hashCounter = 0
//
//   for(let i = 0; i < total; i++) {
//     if(i < hashCount) {
//       hashString += '#'
//       hashCounter ++
//     } else {
//       hashString += ' '
//     }
//   }
//
//   return hashString
// }

// ******* FIRST SOLUTION *******
// This solution thinks of the output like a grid
// function steps(n) {
//   // Iterate through each row (each stair in the staircase)
//   for(let row = 0; row < n; row ++) {
//     let stair = '';
//     // If you are on the first row, you only need one hash (first col)
//     // If you are on the second row, you need two hashes (first two cols)
//     for(let column = 0; column < n; column ++) {
//       // Uses column as a count
//       if(column <= row){
//         stair += '#'
//       } else {
//         stair += ' '
//       }
//     }
//     console.log(stair)
//   }
// }

module.exports = steps;
