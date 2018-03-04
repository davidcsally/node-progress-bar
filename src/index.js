let BAR_LENGTH = 15;

const progBar = (i) => {
  const dashes = Math.floor(i * (BAR_LENGTH * .01) % BAR_LENGTH);
  const spaces = BAR_LENGTH - dashes;
  if (i === 100) return new Array(BAR_LENGTH).join('-')
  return Array.apply(null, Array(BAR_LENGTH-1)).map((v, i) => {
    if (i < dashes) return '-';
    return ' ';
  }).join('');
};

const bufferMessage = (n) => {
  if (String(n).length <= 1) return `  ${n}`;
  if (String(n).length <= 2) return ` ${n}`;
  return `${n}`
}

const printProgress = (index, total, options = {}) => {
  const { length } = options;
  if (length) BAR_LENGTH = length;
  const percent = Math.round(index / total * 100);
  if (index === total) process.stdout.write(`Progress: ${bufferMessage(percent)}% complete [${progBar(percent)}] ✅                \n`);
  else process.stdout.write(`Progress: ${bufferMessage(percent)}% complete [${progBar(percent)}]                \r`);
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
