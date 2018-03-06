const colors = require('./colors');

module.exports = {
  setBarLength: (barLength) => barLength,

  setJoinChar: (char) => char,

  setProgChar: (char) => char,

  setTextColor: (color) => {
    switch (color) {
      case 'black':
        return colors.FgBlack;
      case 'red':
        return colors.FgRed;
      case 'green':
        return colors.FgGreen;
      case 'yellow':
        return colors.FgYellow;
      case 'blue':
        return colors.FgBlue;
      case 'magenta':
        return colors.FgMagenta;
      case 'cyan':
        return colors.FgCyan;
      case 'white':
        return colors.FgWhite;
      default:
        return colors.FgDefault;
    }
  },

  setBgColor: (color) => {
    switch (color) {
      case 'black':
        return colors.BgBlack;
      case 'red':
        return colors.BgRed;
      case 'green':
        return colors.BgGreen;
      case 'yellow':
        return colors.BgYellow;
      case 'blue':
        return colors.BgBlue;
      case 'magenta':
        return colors.BgMagenta;
      case 'cyan':
        return colors.BgCyan;
      case 'white':
        return colors.BgWhite;
      default:
        return colors.BgDefault;
    }
  },
};
