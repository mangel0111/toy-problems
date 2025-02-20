import { describe, expect, it } from 'bun:test';

import { isAnagram } from '.';

describe('isAnagram()', () => {
  it("should return true for 'finder', 'Friend'", () => {
    expect(isAnagram('finder', 'Friend')).toBe(true);
  });

  it("should return false for 'finder', 'Frient'", () => {
    expect(isAnagram('finder', 'Frient')).toBe(false);
  });

  it("should return false for 'adios', 'aloha'", () => {
    expect(isAnagram('adios', 'aloha')).toBe(false);
  });

  it("should return false for 'hello', 'bye'", () => {
    expect(isAnagram('hello', 'bye')).toBe(false);
  });
});
