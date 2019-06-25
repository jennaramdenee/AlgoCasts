// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// 1. Iterative solution (linear order of complexity)
// function fib(n) {
//   //Generate entire series up to n
//   const sequence = [0, 1];
//
//   for(let i = 2; i <= n; i++){
//     sequence.push(sequence[sequence.length-2] + sequence[sequence.length-1]);
//   }
//
//   //Return the last entry
//   return sequence[n];
// }


// 2. Recursive solution (exponential run time)
function slowFib(n) {
  // Always hard code 0 and 1, as they are a given
  if(n < 2){
    return n;
  }

  // Solution works its way down the tree until n < 2
  // where it starts returning stuff, although we are duplicating
  // the number of operations by spinning off two separate processes
  // each time we recurse
  return fib(n - 1) + fib(n - 2);
}

function memoize(fn) {
  const cache = {};
  // With "some" arguments, assigned to an array called args
  return function(...args) {
    // has this method been called with this set of args before?
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(null, args);
    // Update cache
    cache[args] = result;
    return result;
  };
}


// 3. Recursive solution using memoization
// Fib is the anonymous function returned by memoize method
const fib = memoize(slowFib);

module.exports = fib;
