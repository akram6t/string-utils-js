import { capitalize, truncate, wordCount, randomString } from '../src/index.js';

describe('string-utils', () => {
  describe('capitalize', () => {
    it('capitalizes the first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('handles empty string', () => {
      expect(capitalize('')).toBe('');
    });
  });

  describe('truncate', () => {
    it('truncates long strings', () => {
      expect(truncate('This is a long string', 7)).toBe('This is...');
    });

    it('does not truncate short strings', () => {
      expect(truncate('Short', 10)).toBe('Short');
    });
  });

  describe('wordCount', () => {
    it('counts words correctly', () => {
      expect(wordCount('This is a sentence')).toBe(4);
    });

    it('handles empty string', () => {
      expect(wordCount('')).toBe(0);
    });
  });

  describe('randomString', () => {
    it('generates string of correct length', () => {
      expect(randomString(10).length).toBe(10);
    });

    it('generates different strings', () => {
      const str1 = randomString();
      const str2 = randomString();
      expect(str1).not.toBe(str2);
    });
  });
});