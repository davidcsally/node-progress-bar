/** eslint-env: jest */
const print = require('../src/index');

describe('printProgress', () => {
  it('should log 1% correctly', () => {
    expect(print(1, 100)).toEqual(0);
    process.stdout.write('       \r');    
  });

  it('should log 50% correctly', () => {
    expect(print(50, 100)).toEqual(0);
    process.stdout.write('       \r');    
  });

  it('should log 100% correctly', () => {
    expect(print(100, 100)).toEqual(0);
    process.stdout.write('       \r');
  });

  it('should return 0 on success', () => {
    expect(print(1, 1)).toBe(0);
    process.stdout.write('       \r');    
  });

  it('should return 1 on error', () => {
    function divideByZero() {
      print(1, 0);
    }
    try {
      divideByZero();
    }
    catch (e) {
      expect(divideByZero).toThrow();
      expect(divideByZero).toBe(1);
    }
  });

  it('should accept custom lengths', () => {
    expect(print(10, 100, { length: 20 })).toBe(0);
    process.stdout.write('       \r');    
    expect(print(1, 100, { length: 20 })).toBe(0);
    process.stdout.write('       \r');    
    expect(print(100, 100, { length: 20 })).toBe(0);
    process.stdout.write('       \r');    
  });

  it('should have a function called printProgress', () => {
    expect(typeof print).toEqual('function');
  });
});
