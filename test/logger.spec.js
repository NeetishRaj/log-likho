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