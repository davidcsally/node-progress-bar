/** eslint-env: jest */
const utils = require('../src/utils');
const colors = require('../src/colors');

describe('setTextColor', () => {
  it('should return the color passed', () => {
    expect(utils.setTextColor('yellow')).toEqual('yellow');
  });
});

describe('barLength', () => {
  it('should return the length passed', () => {
    expect(utils.setBarLength(20)).toEqual(20);
  });
});

describe('setJoinChar', () => {
  it('should return the char passed', () => {
    expect(utils.setJoinChar(' ')).toEqual(' ');
  });
});

describe('setProgChar', () => {
  it('should return the char passed', () => {
    expect(utils.setProgChar('-')).toEqual('-');
  });

  describe('setBgColor', () => {
    it('should return the proper color', () => {
      expect(utils.setBgColor('magenta')).toEqual(colors.bgMagenta);
      expect(utils.setBgColor('yellow')).toEqual(colors.yellow);
      expect(utils.setBgColor('not a color')).toEqual(colors.default);
      expect(utils.setBgColor()).toEqual(colors.default);
    });
  });
});
