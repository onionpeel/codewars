const findDifference = require('../kyu8/difference-of-volumes-of-cuboids');
const greet = require('../kyu8/function-1-hello-world.js');
const isPalindrome = require('../kyu8/is-it-a-palindrome.js');
const getAverage = require('../kyu8/get-the-mean-of-an-array.js');
const findSmallestInt = require('../kyu8/find-the-smallest-integer.js');

describe('kyu8/difference-of-volumes-of-cuboids', () => {
  test('difference between volumes to be 19', () => {
    expect(findDifference([1,2,2], [3,3,3])).not.toBe(19);
  });

  test('difference between volumes to be 19', () => {
    expect(findDifference([2,2,2], [3,3,3])).toBe(19);
  });
});

describe('kyu8/function-1-hello-world.js', () => {
  test('the return value should be "greet"', () => {
    expect(greet()).toBe('hello world!');
  });

  test('not to be "great"', () => {
    expect(greet()).not.toBe('hello wally!');
  });
});

describe('kyu8/is-it-a-palindrome', () => {
  test('racecar is a palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });
  test('godzilla is not a palindrome', () => {
    expect(isPalindrome('godzilla')).not.toBe(true);
  });
});

describe('kyu8\get-the-mean-of-an-array.js', () => {
  test('the average should be 4', () => {
    expect(getAverage([2,4,6])).toBe(4);
  });
  test('the average should not be a floating point', () => {
    expect(getAverage([1,2])).not.toBe(1.5);
  });
});

describe('kyu8\find-the-smallest-integer.js', () => {
  test('the smallest integer should be -3', () => {
    expect(findSmallestInt([-2, 5, 0, -3])).toBe(-3);
  });
  test('the smallest integer should not be -3', () => {
    expect(findSmallestInt([-2, 5, 0, -3, -4])).not.toBe(-3);
  });
});
