import express, { Application } from "express";
import connection from "../config/database";
import userRoute from "../routes/user";
import customerRoute from "../routes/customer";
import { PORT } from "../config/constants";
import { logger } from "../config/logger";

const app: Application = express();
app.use(express.json()); //this replaces body-parser
app.use("/", userRoute, customerRoute);

const start = async (): Promise<void> => {
  try {
    await connection.sync();
    app.listen(PORT, () => {
      logger.info(`Server started on port ${PORT}!`);
    });
  } catch (error) {
    logger.error(error)
    process.exit(1);
  }
};

void start();
