const print = require('../src/index');

const test = (i) => {
  if (i <= 100) {
    setTimeout(() => {
      print(i, 100, { length: 10 });
      test(i += 1);
    }, 50);
  }
}
console.log('** Starting Loop **');
test(0);

// Run this script by navigating to the project folder and running
// 'NODE_PATH=. node path/to/your/script.js
