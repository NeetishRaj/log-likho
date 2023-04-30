# log-likho
Our favourite console.log, but on steroids.


### Simple Usage
```
npm install log-likho
```

Now at the start of the code let's modify console.log with this steroid version.

```js
console.log = require('log-likho');

console.log('testing 1');
```

This should do normal log to console but also write logs real-time to the logs folder


### With options

```js
const { create_logger } = require('../index');

console.log = create_logger({
  logs_folder: `./your_folder`,
  mode: "a",
})
```

This will create log files in `your_folder` and will not delete old log for that day but instead append it with new logs.

