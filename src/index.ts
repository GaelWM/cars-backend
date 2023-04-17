import express from "express";
import config from "config";
import logger from "./startup/logger";

const app = express();

const port: string =
  process.env.NODE_ENV === "test"
    ? config.get("PORT")
    : process.env.PORT
    ? process.env.PORT
    : "3000";
const server = app.listen(port, () =>
  logger.info(`Listening to port ${port}...`)
);

export default server;
