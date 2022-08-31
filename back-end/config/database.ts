import { Sequelize } from "sequelize-typescript";

import { User } from "../models/user";
import { Customer } from "../models/customer";
import { DB } from "./constants";

const connection = new Sequelize({
  dialect: "sqlite",
  database: "sequelize",
  logging: false,
  models: [User, Customer],
  storage: DB+"/database.sqlite",
  // host: "localhost",
  // username: "root",
  // password: "segqwcwqegEQRGEQRHBERH'!&é'^5126346",
});

export default connection;
