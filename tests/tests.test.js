const findDifference = require('../kyu8/difference-of-volumes-of-cuboids');
const greet = require('../kyu8/function-1-hello-world.js');
const isPalindrome = require('../kyu8/is-it-a-palindrome.js');
const getAverage = require('../kyu8/get-the-mean-of-an-array.js');
const findSmallestInt = require('../kyu8/find-the-smallest-integer.js');
const reduce = require('../kyu8/reduce-but-grow.js');
const between = require('../kyu8/what-is-between.js');
const isDivisible = require('../kyu8/is-n-divisible-by-x-and-y.js');
const dnaToRna = require('../kyu8/DNA-to-RNA-conversion.js');
const getGrade = require('../kyu8/grade-book.js');
const fakeBin = require('../kyu8/fake-binary.js');
const isVow = require('../kyu8/is-there-a-vowel-in-there.js');

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

describe('kyu8\reduce-but-grow.js', () => {
  test('the product of the array should be 24', () => {
    expect(reduce([1,2,3,4])).toBe(24);
  });
  test('the product of the array should not be 24', () => {
    expect(reduce([1,2,3,5])).not.toBe(24);
  });
});

describe('kyu8\reduce-but-grow.js', () => {
  test('it should return all numbers between 1 and 4, inclusive', () => {
    expect(between(1,4)).toEqual([1,2,3,4]);
  });
  test('it should not include all numbers between 1 and 6', () => {
    expect(between(1,4)).not.toEqual([1,2,3,4,5,6]);
  });
});

describe('kyu8\is-n-divisible-by-x-and-y.js', () => {
  test('the number 6 should return true for 2 and 3', () => {
    expect(isDivisible(6,2,3)).toBe(true);
  });
  test('the number 5 should return false for 2 and 3', () => {
    expect(isDivisible(5,2,3)).not.toBe(true);
  });
});

describe('kyu8\DNA-to-RNA-conversion.js', () => {
  test('T should be replaced by U', () => {
    expect(dnaToRna('GCAT')).toBe('GCAU');
  });
});

describe('kyu8\grade-book.js', () => {
  test('it should return an "A"', () => {
    expect(getGrade(100, 92, 95)).toBe('A');
  });
  test('it should not be an "A"', () => {
    expect(getGrade(85,85,85)).not.toBe('A');
  });
});

describe('kyu8\fake-binary.js', () => {
  test('it should return the string "000111"', () => {
    expect(fakeBin('123789')).toBe('000111');
  });
  test('it should not return the string "0011"', () => {
    expect(fakeBin('5522')).not.toBe('0011');
  });
});

describe('kyu8\is-there-a-vowel-in-there.js', () => {
  test('it should return ["e", 121, 110]', () => {
    expect(isVow([101,121,110])).toEqual(["e", 121, 110]);
  });
  test('it should not return ["e", 121, 110]', () => {
    expect(isVow([101,121,110])).not.toEqual(["a", 121, 110]);
  });
});
