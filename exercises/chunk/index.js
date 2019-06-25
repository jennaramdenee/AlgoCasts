// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
//
// Option 1: Iterative Solution
// let chunked = [];
//
// // For each element in original array
// for(let element of array) {
//   // Get the last element in chunked
//   const lastChunkedElement = chunked[chunked.length - 1]
//   // If last element does not exist or if length is equal to chunked size
//   if(!lastChunkedElement || lastChunkedElement.length === size) {
//     // Create new chunk and add element
//     chunked.push([element])
//   } else {
//     // Else add element into chunk
//     lastChunkedElement.push(element)
//   }
// }
// return chunked

// Option 2:

function chunk(array, size) {
  let chunked = []
  let startIndex = 0

  while(startIndex < array.length) {
    chunked.push(array.slice(startIndex, startIndex + size))
    startIndex = startIndex + size
  }

  return chunked
}

module.exports = chunk;
