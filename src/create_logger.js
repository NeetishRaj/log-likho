const fs = require("fs");
const util = require("util");

const default_options = require('./log_options');


const log_stdout = process.stdout;


const create_logger = (options = {}) => {

  const final_options = {
    ...default_options,
    ...options,
  }

  const { logs_folder, mode } = final_options;

  // Create logs folder if it doesn't exist
  if (!fs.existsSync(logs_folder)) {
    fs.mkdirSync(logs_folder);
    console.log(`Created '${logs_folder}' folder`);
  }

  const log_output_path = `${logs_folder}/${new Date()
    .toDateString()
    .replaceAll(" ", "-")}.log`;

  const log_file = fs.createWriteStream(log_output_path, { flags: mode });

  return function (d) {
    const text = `[${new Date().toTimeString().substring(0, 8)}]: ${util.format(
      d
    )}\n`;
    log_file.write(text);
    log_stdout.write(text);
  };
};

module.exports = create_logger;