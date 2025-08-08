// index.d.ts

declare module "log-likho" {
  interface LoggerOptions {
    logs_folder?: string;
    mode?: string;
    [key: string]: any;
  }

  interface AdvancedLogger {
    info: (msg: any) => void;
    warn: (msg: any) => void;
    error: (msg: any) => void;
    fatal: (msg: any) => void;
    log: (msg: any) => void;
  }

  /**
   * Basic logger that writes to stdout and a log file.
   * Returns a simple log function.
   */
  function simple_logger(options?: LoggerOptions): (msg: any) => void;

  /**
   * Advanced logger with log levels (info, warn, error, fatal, log).
   */
  function create_logger(options?: LoggerOptions): AdvancedLogger;

  export = simple_logger;
  export { create_logger, LoggerOptions, AdvancedLogger };
}
