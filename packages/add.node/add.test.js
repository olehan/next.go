describe('add', () => {
  it('should run importing node-gyp addon', () => {
    const add = require('./build/Release/add');

    const a = 23525;
    const b = 64532;

    const expectedSum = a + b;

    expect(add.add(a, b)).toBe(expectedSum);
  });
});
