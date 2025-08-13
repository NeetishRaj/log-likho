
# log-likho
A console.log, that logs on console as well as on a file in `logs/` folder.  
Plus an advanced logger with `INFO`, `WARN`, `ERROR` & `FATAL` modes.

---

## Simple Logger Usage

```sh
npm install log-likho
```

Replace the normal console.log with this "file + console" log function.

```js
console.log = require('log-likho')();

console.log('testing 1');
```

This should do normal log to console but also write logs real-time to the `logs/` folder.

##### Log in append mode

```js
console.log = require('log-likho')({ mode: 'a' });

console.log('testing 1');
```

##### With all the options

```js
const simple_logger = require('log-likho');

console.log = simple_logger({
  logs_folder: './my_folder',
  mode: "a",
})
```

This will create log files in `my_folder` and will not overwrite them with new logs on next executions.

---

## Advanced Logger

🚀 Features

* ✅ Supports **info**, **warn**, **error**, **fatal**, and **log** levels
* ✅ **Multiple arguments & error objects** supported
* ✅ **Selective log levels to file** (choose which levels are written to disk)
* ✅ Colored terminal output for easy debugging
* ✅ Custom log folder and file mode (append/overwrite)
* ✅ No external dependencies

---

### Usage

```sh
npm install log-likho
```

To use the logger:

```js
const { create_logger } = require("log-likho");

const logger = create_logger({
  logs_folder: "./logs", // default: './logs'
  mode: "a",             // append mode; use 'w' for overwrite
});

logger.info("This is an info message");
logger.warn("This is a warning");
logger.error("This is an error");
logger.fatal("This is a fatal error");
logger.log("This is a plain log message");
```
**Output**

![LoggerImage](./assets/image.png)
---

### 1. Multiple Arguments & Error Object Support

You can now log multiple values or an `Error` object in a single call:

```js
const err = new Error("Database connection failed");

logger.error("Something went wrong:", err);
logger.info("User logged in:", { id: 42, name: "John Doe" });
logger.warn("Low disk space:", 512, "MB remaining");
```

This works for **all log levels**.

---

### 2. Selective Log Levels to File

You can now configure **which log levels should be written to file** using the `log_levels_to_file` option.
All levels will still print to the console unless you handle them differently.

```js
const logger = create_logger({
  logs_folder: "./logs",
  mode: "a",
  log_levels_to_file: ["ERROR", "FATAL"], // Only write these to file
});

logger.info("This will appear in console only");
logger.error("This will appear in console + file");
logger.fatal("This will appear in console + file");
```

---



| Level | Terminal Color     |
| ----- | ------------------ |
| INFO  | Cyan               |
| WARN  | Yellow             |
| ERROR | Red                |
| FATAL | Magenta            |
| LOG   | Default (no color) |

---

## Default Options

| Option               | Type      | Default                                     | Description                                            |
| -------------------- | --------- | ------------------------------------------- | ------------------------------------------------------ |
| `logs_folder`        | String    | `./logs`                                    | Directory to store log files                           |
| `mode`               | String    | `"a"`                                       | File write mode: `"a"` for append, `"w"` for overwrite |
| `log_levels_to_file` | String\[] | `["INFO", "WARN", "ERROR", "FATAL", "LOG"]` | Which log levels should be written to file             |

---

## TypeScript Compatible

`log-likho` supports TypeScript out of the box.

* Includes `index.d.ts` for type safety.
* Works seamlessly with both JavaScript and TypeScript projects.
* No extra setup needed — just import and use!

```ts
import simple_logger, { create_logger } from 'log-likho';

// Simple logger
console.log = simple_logger();
console.log("Modifed simple logger!", {name: "neet"})

// Advanced logger
const logger = create_logger({
  logs_folder: "./logs",
  log_levels_to_file: ["ERROR", "FATAL"]
});

logger.info("This is an info message");
logger.warn("This is a warning");
logger.error("This is an error");
logger.fatal("This is a fatal error");
logger.log("This is a plain log message");
```