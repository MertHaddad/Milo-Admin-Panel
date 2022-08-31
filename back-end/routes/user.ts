import express, { Request, Response } from "express";
import { logger } from "../config/logger";
import { createUser, getUsers } from "../dbService/userService";

const userRoute = express.Router();

userRoute.get(
  "/users",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const users = await getUsers();
      return res.status(200).json(users);
    } catch (error) {
      logger.error(error);
      return res.status(500).json([]);
    }
  }
);

userRoute.post(
  "/user",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const user = await createUser(req.body);
      return res.status(201).json(user);
    } catch (error) {
      logger.error(error);
      return res.status(500).json([]);
    }
  }
);

export default userRoute;
