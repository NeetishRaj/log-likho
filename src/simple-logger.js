const fs = require("fs");
const util = require("util");

const default_options = require("./log-options");
const { dd_month_yyyy_day } = require("./utils/date-formats");

const log_stdout = process.stdout;

const simple_logger = (options = {}) => {
  const final_options = {
    ...default_options,
    ...options,
  };

  const { logs_folder, mode } = final_options;

  // Create logs folder if it doesn't exist
  if (!fs.existsSync(logs_folder)) {
    fs.mkdirSync(logs_folder);
    console.log(`Created '${logs_folder}' folder`);
  }

  const log_output_path = `${logs_folder}/${dd_month_yyyy_day()}.log`;
  const log_file = fs.createWriteStream(log_output_path, { flags: mode });

  return function (...args) {
    // util.format will handle multiple arguments & error objects nicely
    const text = `[${new Date().toTimeString().substring(0, 8)}]: ${util.format(
      ...args
    )}\n`;

    log_file.write(text);
    log_stdout.write(text);
  };
};

module.exports = simple_logger;
