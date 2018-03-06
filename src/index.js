const colors = require('./colors');
const { setBarLength, setBgColor, setTextColor, setProgChar, setJoinChar } = require('./utils');

let BAR_LENGTH = 10;
let TEXT_COLOR = colors.FgDefault;
let BG_COLOR = colors.BgDefault;
let JOIN_CHAR = '_';
let PROG_CHAR = ' ';
let CRAZY = '';

const progBar = (i) => {
  const dashes = Math.floor(i * (BAR_LENGTH * 0.01) % BAR_LENGTH);
  const spaces = BAR_LENGTH - dashes;

  let progress = `${BG_COLOR}${TEXT_COLOR}`;
  let resetFlag = false;

  if (i === 100) {
    for (let i = 0; i < BAR_LENGTH; i += 1) {
      progress += PROG_CHAR;
    }
    progress += colors.reset;
    return progress;
  }

  for (let i = 0; i < BAR_LENGTH; i += 1) {
    if (i < dashes) {
      progress += PROG_CHAR;
    }
    else {
      if (!resetFlag) {
        progress += colors.reset;
        resetFlag = true;
      }
      progress += JOIN_CHAR;
    }
  }
  return progress;
};

const bufferMessage = (n) => {
  if (String(n).length <= 1) return `  ${n}`;
  if (String(n).length <= 2) return ` ${n}`;
  return `${n}`
};

const processOptions = (options) => {
  const { barLength, textColor, joinChar, progChar, bgColor } = options;
  if (progChar) PROG_CHAR = setProgChar(progChar);
  if (barLength) BAR_LENGTH = setBarLength(barLength);
  if (textColor) TEXT_COLOR = setTextColor(textColor);
  if (joinChar) JOIN_CHAR = setJoinChar(joinChar);
  if (bgColor) BG_COLOR = setBgColor(bgColor);
};

const printProgress = (index, total = 100, options = {}) => {
  if (options) processOptions(options);
  const percent = Math.round(index / total * 100);

  if (index === total) process.stdout
    .write(`✅  |${progBar(percent)}` + `|  ${index}/${total}  ${bufferMessage(percent)}% complete            \n`);
  else process.stdout
    .write(`    |${progBar(percent)}` + `|  ${index}/${total}  ${bufferMessage(percent)}%                     \r`);
};

/** Prints a progress bar in Node.js when iterating,
 * over a know amount of items. Place this function in your
 * loop and pass it the current index and total number of 
 * iterations.
 * 
 * @param index - index value
 * @param total - total count
 * @param options - object of optional parameters
 * @returns 0 (success) 1 (error)
 */
module.exports = function (index, total, options = {}) {
  try {
    if (total === 0) throw new Error('cannot divide by zero');
    printProgress(index, total, options);
    return 0;
  }
  catch (e) {
    console.log('[progress-bar]: ', e);
    return 1;
  }
};
