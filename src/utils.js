const colors = require('./colors');

module.exports = {
  setBarLength: (barLength) => barLength,
  setJoinChar: (char) => char,
  setProgChar: (char) => char,
  setBgColor: (color) => {
    switch (color) {
      case 'magenta':
        return colors.bgMagenta;
      default:
        return colors.default;
    }
  },
  setTextColor: (color) => {
    switch (color) {
      case 'yellow':
        return colors.yellow;
      default:
        return colors.default;
    }
  },
};
