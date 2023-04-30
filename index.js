const create_logger = require('./src/create_logger');

const log = create_logger();

module.exports = log;
module.exports.create_logger = create_logger;
