import express, { Request, Response } from "express";
import { logger } from "../config/logger";
import { createCustomer, getCustomers } from "../dbService/customerService";

const customerRoute = express.Router();

customerRoute.get(
  "/customers",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const users = await getCustomers();
      return res.status(200).json(users);
    } catch (error) {
      logger.error(error);
      return res.status(500).json([]);
    }
  }
);

customerRoute.post(
  "/customer",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const user = await createCustomer(req.body);
      return res.status(201).json(user);
    } catch (error) {
      logger.error(error);
      return res.status(500).json([]);
    }
  }
);

export default customerRoute;
