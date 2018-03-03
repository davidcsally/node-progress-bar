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
  [ ] custom print messages
  [ ] progress animations
  [ ] progress bar customizations
  [ ] your suggestions!

Thanks for checking out node-progress-bar!
