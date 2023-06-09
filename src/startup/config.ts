import config from "config";
import winston from "winston";

export default function () {
  const jwtPrivateKey = config.get("jwtPrivateKey");
  if (!jwtPrivateKey) {
    winston.error("FATAL ERROR: jwtPrivateKey is not defined.");
    throw new Error("FATAL ERROR: jwtPrivateKey is not defined.");
  }
}
