import express, {
    Application,
    Request,
    Response,
    NextFunction,
  } from "express";
  import { User } from "../models/users";
  
  const rt1 = express.Router()
  

  rt1.post("/user", async (req: Request, res: Response): Promise<Response> => {
  console.log(req.body);
  const user: User = await User.create({ ...req.body });
  return res.status(201).json(user);
});
  
  export default rt1