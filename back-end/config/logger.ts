import * as winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

function getLogLevel(logLevel: string): string {
  if (typeof logLevel !== "undefined") return logLevel;
  else return "info";
}

const logLevel = getLogLevel("debug");
const logLevelConsole = getLogLevel("info");
const logPath = "./logs";

console.log("Log level = " + logLevel);
console.log("Console log level = " + logLevelConsole);
console.log("Log path = " + logPath);

const dailyRotateTransport: DailyRotateFile = new DailyRotateFile({
  level: logLevel,
  dirname: logPath,
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss.SSS",
    }),
    winston.format.json()
  ),
  filename: "log-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "10m",
  maxFiles: "30d",
});

const consoleTransport = new winston.transports.Console({
  level: logLevelConsole,
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss.SSS",
    }),
    winston.format.colorize(),
    winston.format.simple()
  ),
});

export const logger = winston.createLogger({
  levels: winston.config.npm.levels,
  transports: [dailyRotateTransport, consoleTransport],
});

// logger.stream = {
//   write: function (message, encoding) {
//     logger.info(message);
//   },
// };

winston.stream({ start: -1 }).on("log", function (log) {
  console.log(log);
});
