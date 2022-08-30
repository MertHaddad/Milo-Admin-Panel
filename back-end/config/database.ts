import { Sequelize } from "sequelize-typescript";

import { User } from "../models/users";

const connection = new Sequelize({
  dialect: "sqlite",
  host: "localhost",
  username: "root",
  password: "segqwcwqegEQRGEQRHBERH'!&é'^5126346",
  database: "sequelize",
  logging: false,
  models: [User],
  storage: "./database.sqlite",

});

export default connection;