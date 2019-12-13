const findDifference = require('../kyu8/difference-of-volumes-of-cuboids');

describe('difference-of-volumes-of-cuboids', () => {
  test('difference between volumes to be 19', () => {
    expect(findDifference([1,2,2], [3,3,3])).not.toBe(19);
  });

  test('difference between volumes to be 19', () => {
    expect(findDifference([2,2,2], [3,3,3])).toBe(19);
  });
});
