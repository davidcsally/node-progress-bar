const print = require('../src/index');

const options = {
  barLength: 10,
  textColor: 'yellow',
  progChar: 'x',
  joinChar: '_',
};

const test = (i) => {
  if (i <= 100) {
    setTimeout(() => {
      print(i, 100, options);
      test(i += 1);
    }, 50);
  }
}
console.log('\n\n\n');
console.log('** Starting Loop **');
test(0);

// Run this script by navigating to the project folder and running
// 'NODE_PATH=. node path/to/your/script.js
