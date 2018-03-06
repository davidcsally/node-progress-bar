/** eslint-env: jest */
const utils = require('../src/utils');
const colors = require('../src/colors');

describe('setTextColor', () => {
  it('should return the color passed', () => {
    expect(utils.setTextColor('black')).toEqual(colors.FgBlack);
    expect(utils.setTextColor('red')).toEqual(colors.FgRed);
    expect(utils.setTextColor('green')).toEqual(colors.FgGreen);
    expect(utils.setTextColor('yellow')).toEqual(colors.FgYellow);
    expect(utils.setTextColor('blue')).toEqual(colors.FgBlue);
    expect(utils.setTextColor('magenta')).toEqual(colors.FgMagenta);
    expect(utils.setTextColor('cyan')).toEqual(colors.FgCyan);
    expect(utils.setTextColor('white')).toEqual(colors.FgWhite);
    expect(utils.setTextColor('')).toEqual(colors.FgDefault);
    expect(utils.setTextColor()).toEqual(colors.FgDefault);
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
      expect(utils.setBgColor('black')).toEqual(colors.BgBlack);
      expect(utils.setBgColor('red')).toEqual(colors.BgRed);
      expect(utils.setBgColor('green')).toEqual(colors.BgGreen);
      expect(utils.setBgColor('yellow')).toEqual(colors.BgYellow);
      expect(utils.setBgColor('blue')).toEqual(colors.BgBlue);
      expect(utils.setBgColor('magenta')).toEqual(colors.BgMagenta);
      expect(utils.setBgColor('cyan')).toEqual(colors.BgCyan);
      expect(utils.setBgColor('white')).toEqual(colors.BgWhite);
      expect(utils.setBgColor('not a color')).toEqual(colors.BgDefault);
      expect(utils.setBgColor()).toEqual(colors.BgDefault);
    });
  });
});
