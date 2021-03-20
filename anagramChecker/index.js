// A word is an anagram of another word if both use the same letters in the same quantity,
// but arranged differently.

// anagram('finder', 'Friend')  --> true
// anagram('hello', 'bye') --> false

const createKeyMap = (word) => {
  const keys = {};
  for (let index = 0; index < word.length; index++) {
    if (!keys[word[index]]) {
      keys[word[index]] = 1;
    } else {
      keys[word[index]]++;
    }
  }
  return keys;
};

const isAnagram = (firstWord, secondWord) => {
  const firstWordParsed = firstWord.toLowerCase();
  const secondWordParsed = secondWord.toLowerCase();
  if (firstWord.length !== secondWord.length) {
    return false;
  }

  const firstWordKeys = createKeyMap(firstWordParsed);
  const secondWordKeys = createKeyMap(secondWordParsed);

  const firstListKeys = Object.keys(firstWordKeys);
  const secondListKeys = Object.keys(secondWordKeys);

  if (firstListKeys.length !== secondListKeys.length) {
    return false;
  }

  for (let index = 0; index < firstListKeys.length; index++) {
    const valueToCompare = firstListKeys[index];
    if (firstWordKeys[valueToCompare] !== secondWordKeys[valueToCompare]) {
      return false;
    }
  }
  return true;
};

console.log("'finder', 'Friend'", isAnagram("finder", "Friend"));
console.log("'finder', 'Frient'", isAnagram("finder", "Frient"));
console.log("'adios', 'aloha'", isAnagram("adios", "aloha"));
console.log("'hello', 'bye'", isAnagram("hello", "bye"));
