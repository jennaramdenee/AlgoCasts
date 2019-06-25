// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function createLetterCountMap(string) {
  let stringMap = {}
  for(let letter of string) {
    //if we have already seen this letter, increment count by 1
    if(stringMap[letter]) {
      stringMap[letter] ++;
    // otherwise add the letter to the map
    } else {
      stringMap[letter] = 1;
    }

    // Also a nice way of doing the above
    // stringMap[letter] = stringMap[letter] + 1 || 1

  }
  return stringMap
}

function removeNonChars(string) {
  return string.replace(/[^\w]/g, "").toLowerCase();
}

function anagrams(stringA, stringB) {
  //remove all non-letter charaters
  stringA = removeNonChars(stringA)
  stringB = removeNonChars(stringB)

  //check that each string is the same length as a first check
  if(stringA.length !== stringB.length){
    return false
  }

  //create a letter to count map for each string
  stringAMap = createLetterCountMap(stringA)
  stringBMap = createLetterCountMap(stringB)

  //check that each map has the same number of keys
  if(Object.keys(stringAMap).length !== Object.keys(stringBMap).length) {
    return false
  }

  //compare key value pairs for each map
  for(let letter in stringAMap) {
    if(stringAMap[letter] !== stringBMap[letter]) {
      return false
    }
  }

  return true
}

module.exports = anagrams;
