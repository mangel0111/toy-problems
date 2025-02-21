import { describe, expect, it } from 'bun:test';

import { groupAnagrams } from '.';

describe('groupAnagram()', () => {
  it('should group anagrams', () => {
    expect(
      groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
    ).toContainValue(['bat']);
    expect(
      groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
    ).toContainValue(['tan', 'nat']);
    expect(
      groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
    ).toContainValue([ "eat", "tea", "ate" ]);
  });

  it('only return the only word provided', () => {
    expect(groupAnagrams([''])).toStrictEqual([['']]);
  });
});
