import { describe, expect, it } from 'bun:test';

import { groupAnagrams } from '.';

describe('groupAnagram()', () => {
  it('should group anagrams', () => {
    expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual([
      ['bat'],
      ['nat', 'tan'],
      ['ate', 'eat', 'tea'],
    ]);
  });

  it('only return the only word provided', () => {
    expect(groupAnagrams([''])).toStrictEqual([['']]);
  });
});
