# log-likho
Our favourite console.log, but on steroids.


### Usage
```
npm install log-likho
```

Now at the start of the code let's modify console.log with this steroid version.

```js
console.log = require('log-likho')();

console.log('testing 1');
```

This should do normal log to console but also write logs real-time to the logs folder

### Log in append mode

```js
console.log = require('log-likho')({mode: 'a'});

console.log('testing 1');
```


### With all the options

```js
const create_logger = require('log-likho');

console.log = create_logger({
  logs_folder: './my_folder',
  mode: "a",
})

```

This will create log files in `my_folder` and will not delete old log for that day but instead append it with new logs.



## Default options

Options | Default Value | Possible values | Purpose
--- | --- | --- | ---
`logs_folder` | './logs' | any accessible folder | Sets the folder path where the logs will be stored
`mode` | 'w' | 'a' or 'w' | configures how daily logs are written i.e overwriting mode with 'w' or append mode with 'a' 