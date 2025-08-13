// index.d.ts

declare module "log-likho" {
  interface LoggerOptions {
    /**
     * Directory to store log files.
     * @default "./logs"
     */
    logs_folder?: string;

    /**
     * File write mode.
     * "a" = append, "w" = overwrite
     * @default "a"
     */
    mode?: string;

    /**
     * Array of log levels that should be written to file.
     * All levels will still print to console.
     * @default ["INFO", "WARN", "ERROR", "FATAL", "LOG"]
     */
    log_levels_to_file?: Array<"INFO" | "WARN" | "ERROR" | "FATAL" | "LOG">;

    [key: string]: any;
  }

  interface AdvancedLogger {
    /**
     * Info level logging
     */
    info: (...args: any[]) => void;

    /**
     * Warning level logging
     */
    warn: (...args: any[]) => void;

    /**
     * Error level logging
     */
    error: (...args: any[]) => void;

    /**
     * Fatal level logging
     */
    fatal: (...args: any[]) => void;

    /**
     * Generic logging (no color)
     */
    log: (...args: any[]) => void;
  }

  /**
   * Basic logger that writes to stdout and a log file.
   * Returns a simple log function.
   */
  function simple_logger(options?: LoggerOptions): (...args: any[]) => void;

  /**
   * Advanced logger with log levels (info, warn, error, fatal, log).
   */
  function create_logger(options?: LoggerOptions): AdvancedLogger;

  export = simple_logger;
  export { create_logger, LoggerOptions, AdvancedLogger };
}
