import path from "path";
import { Knex } from "knex";

const config: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: path.join(__dirname, "cars-db.sqlite"),
  },
  migrations: {
    directory: path.join(__dirname, "migrations"),
  },
  useNullAsDefault: true,
};

export default config;
