describe('add', () => {
  it('should run importing node-gyp addon', () => {
    const add = require('./build/Release/add');

    const num1 = 23525;
    const num2 = 64532;

    const expectedSum = num1 + num2;

    expect(add.add(num1, num2)).toBe(expectedSum);
  });
});
