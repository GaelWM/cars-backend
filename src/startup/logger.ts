import Winston from "winston";

const logger = Winston.createLogger({
  level: "info",
  format: Winston.format.combine(
    Winston.format.timestamp(),
    Winston.format.json()
  ),
  transports: [
    new Winston.transports.Console(),
    new Winston.transports.File({
      filename: "logFile.log",
    }),
  ],
  exceptionHandlers: [
    new Winston.transports.Console(),
    new Winston.transports.File({ filename: "uncaughtException.log" }),
  ],
});

export default logger;
