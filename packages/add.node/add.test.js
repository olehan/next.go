describe('add', () => {
  it('should run importing node-gyp addon', () => {
    const add = require('./build/Release/add');

    const sum1 = 23525;
    const sum2 = 64532;

    const expectedSum = sum1 + sum2;

    expect(add.add(sum1, sum2)).toBe(expectedSum);
  });
});
