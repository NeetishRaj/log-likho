const path = require('path');

const { create_logger } = require('../index');

const logger = create_logger({
  logs_folder: `${process.cwd()}/logger-logs`,
  mode: "a" // append mode
});

console.log("=== Testing log levels ===");

logger.info("This is an info message.");
logger.warn("This is a warning.");
logger.error("This is an error.");
logger.fatal("This is a fatal error.");
logger.log("This is a generic log.");


// === Test multiple arguments ===
console.log("\n=== Testing multiple arguments logging ===");
const err = new Error("Something went wrong");
logger.error("Error occurred while connecting to DB:", err);
logger.info("User login event", { userId: 42, name: "John Doe" });
logger.warn("Low disk space:", 512, "MB remaining");

// === Test selective logging to file ===
console.log("\n=== Testing selective log levels ===");
const selectiveLoggerFolder = `${process.cwd()}/logger-logs-selective`;
const selectiveLogger = create_logger({
  logs_folder: selectiveLoggerFolder,
  mode: "w", // overwrite for fresh test
  log_levels_to_file: ["ERROR", "FATAL"], // only write these to file
});

// Log all levels — only ERROR & FATAL should appear in file
selectiveLogger.info("This info should NOT go to file");
selectiveLogger.warn("This warn should NOT go to file");
selectiveLogger.error("This error SHOULD go to file");
selectiveLogger.fatal("This fatal error SHOULD go to file");