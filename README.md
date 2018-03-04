[![Coverage Status](https://coveralls.io/repos/github/davidcsally/node-progress-bar/badge.svg?branch=master)](https://coveralls.io/github/davidcsally/node-progress-bar?branch=master)
[![Build Status](https://travis-ci.org/davidcsally/node-progress-bar.svg?branch=master)](https://travis-ci.org/davidcsally/node-progress-bar)

Ever wanted to print the progress of a loop you are running, but not clutter up your console?

Maybe you are updating a large batch of documents in your database, that requires you to iterate over them?

Printing the progress has never been easier! Node-progress-bar makes this easy!

How to use:

```
 npm install --save-dev node-progress-bar 
```
or 
```
 yarn add node-progress-bar --dev 
```

at the top of your node file, add:
``` const progressBar = require('node-progress-bar'); ```

then call the function in your operation!

```
for (let i = 0; i < 100; i += 1) {
  progressBar(i, 100);
};
```

it's that simple!

Coming soon... 
  1. [ ] custom print messages
  2. [ ] progress animations
  3. [ ] progress bar customizations
  4. [ ] your suggestions!

Thanks for checking out node-progress-bar!
