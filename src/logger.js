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

  const { logs_folder, mode } = final_options;

  if (!fs.existsSync(logs_folder)) {
    fs.mkdirSync(logs_folder);
    console.log(`Created '${logs_folder}' folder`);
  }

  const log_output_path = `${logs_folder}/${dd_month_yyyy_day()}.log`;
  const log_file = fs.createWriteStream(log_output_path, { flags: mode });

  function formatMessage(level, message) {
    const timestamp = new Date().toTimeString().substring(0, 8);
    return `[${timestamp}] [${level}] ${util.format(message)}\n`;
  }

  return {
    info: (msg) => {
      const formatted = formatMessage("INFO", msg);
      log_file.write(formatted);
      log_stdout.write(COLORS.INFO + formatted + COLORS.RESET);
    },
    warn: (msg) => {
      const formatted = formatMessage("WARN", msg);
      log_file.write(formatted);
      log_stdout.write(COLORS.WARN + formatted + COLORS.RESET);
    },
    error: (msg) => {
      const formatted = formatMessage("ERROR", msg);
      log_file.write(formatted);
      log_stdout.write(COLORS.ERROR + formatted + COLORS.RESET);
    },
    fatal: (msg) => {
      const formatted = formatMessage("FATAL", msg);
      log_file.write(formatted);
      log_stdout.write(COLORS.FATAL + formatted + COLORS.RESET);
    },
    log: (msg) => {
      const formatted = formatMessage("LOG", msg);
      log_file.write(formatted);
      log_stdout.write(formatted);
    },
  };
};

module.exports = create_logger;
