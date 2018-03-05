const colors = require('./colors');

module.exports = {
  setTextColor: (color) => color,
  setBarLength: (barLength) => barLength,
  setJoinChar: (char) => char,
  setProgChar: (char) => char,
  setBgColor: (color) => {
    switch (color) {
      case 'magenta':
        return colors.bgMagenta;
      case 'yellow':
        return colors.yellow;
      default:
        return colors.default;
    }
  },
};
