import express, {
  Application,
  Request,
  Response,
  NextFunction,
} from "express";
import { User } from "../models/users";

const rt = express.Router()

rt.get("/users", async (req: Request, res: Response): Promise<Response> => {
  const allUsers: User[] = await User.findAll();
  return res.status(200).json(allUsers);
});

export default rt