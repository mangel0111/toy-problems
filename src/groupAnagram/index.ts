/**
 * iven an array of strings strs, group the anagrams together. You can return the answer in any order.
 * 
 * Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
 */

const checkAnagram = (wordA: string, wordB: string): boolean => {
  return wordA.split('').reverse().join('') === wordB;
};

export function groupAnagrams(words: string[]): string[][] {
  const anagramGroups: string[][] = [];

  for (let index = 0; index < words.length; index++) {
    for (let index2 = 0; index2 < words.length; index2++) {
      if (index === index2) {
        continue;
      }
      if (checkAnagram(words[index], words[index2])) {
      } else {
        anagramGroups.push([words[index]]);
      }
    }
  }

  return anagramGroups;
}
