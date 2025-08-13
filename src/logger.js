const fs = require("fs");
const util = require("util");

const COLORS = require("./utils/colors");
const default_options = require("./log-options");
const { dd_month_yyyy_day } = require("./utils/date-formats");

const log_stdout = process.stdout;

const create_logger = (options = {}) => {
  const final_options = {
    ...default_options,
    ...options,
  };

  const { logs_folder, mode, log_levels_to_file } = final_options;

  if (!fs.existsSync(logs_folder)) {
    fs.mkdirSync(logs_folder);
    console.log(`Created '${logs_folder}' folder`);
  }

  const log_output_path = `${logs_folder}/${dd_month_yyyy_day()}.log`;
  const log_file = fs.createWriteStream(log_output_path, { flags: mode });

  function format_message(level, args) {
    const timestamp = new Date().toTimeString().substring(0, 8);
    // util.format applies formatting for multiple args
    return `[${timestamp}] [${level}] ${util.format(...args)}\n`;
  }

  function write_log(level, color, args) {
    const formatted = format_message(level, args);

    // Always write to console
    log_stdout.write(color + formatted + COLORS.RESET);

    // Conditionally write to file based on config
    if (log_levels_to_file.includes(level)) {
      log_file.write(formatted);
    }
  }

  return {
    info: (...args) => write_log("INFO", COLORS.INFO, args),
    warn: (...args) => write_log("WARN", COLORS.WARN, args),
    error: (...args) => write_log("ERROR", COLORS.ERROR, args),
    fatal: (...args) => write_log("FATAL", COLORS.FATAL, args),
    log: (...args) => write_log("LOG", "", args),
  };
};

module.exports = create_logger;
