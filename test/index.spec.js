/** eslint-env: jest */
const print = require('../src/index');

describe('printProgress', () => {
  it('should log 1% correctly', () => {
    expect(print(1, 100)).toEqual(0);
  });

  it('should log 50% correctly', () => {
    expect(print(50, 100)).toEqual(0);
  });

  it('should log 100% correctly', () => {
    expect(print(100, 100)).toEqual(0);
  });

  it('should return 0 on success', () => {
    expect(print(1, 1)).toBe(0);
  });

  it('should return 1 on error', () => {
    expect(print(1, 0)).toBe(1);
  });

  it('should accept custom lengths', () => {
    expect(print(10, 100, { length: 20 })).toBe(0);
    expect(print(1, 100, { length: 20 })).toBe(0);
    expect(print(100, 100, { length: 20 })).toBe(0);
  });

  it('should have a function called printProgress', () => {
    expect(typeof print).toEqual('function');
  });
});
