'use strict';

module.exports = {
  // non color attributes
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',

  // foreground
  FgBlack: '\x1b[30m',
  FgRed: '\x1b[31m',
  FgGreen: '\x1b[32m',
  FgYellow: '\x1b[33m',
  FgBlue: '\x1b[34m',
  FgMagenta: '\x1b[35m',
  FgCyan: '\x1b[36m',
  FgWhite: '\x1b[37m',
  FgDefault: '\x1b[39m',

  // background
  BgBlack: '\x1b[40m',
  BgRed: '\x1b[41m',
  BgGreen: '\x1b[42m',
  BgYellow: '\x1b[43m',
  BgBlue: '\x1b[44m',
  BgMagenta: '\x1b[45m',
  BgCyan: '\x1b[46m',
  BgWhite: '\x1b[47m',
  BgDefault: '\x1b[49m',

  BgLighGray: '\x1b[100m',
  BgLightRed: '\x1b[101m',
  BgLightGreen: '\x1b[102m',
  BgLightYellow: '\x1b[103m',
  BgLightBlue: '\x1b[104m',
  BgLightMagenta: '\x1b[105m',
  BgLightCyan: '\x1b[106m',
  BgLightWhite: '\x1b[107m',
};
