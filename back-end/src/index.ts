import express, { Application, Request, Response, NextFunction } from "express";
import connection from "../config/database";
import { User } from "../models/users";
import rt from "../routes/user";
import rt1 from "../routes/user1";

const router = express.Router();

const app: Application = express();
const port = 5000;

app.use(express.json());


app.use("/", rt,rt1);



// app.use(
//     bodyParser.urlencoded({
//       extended: false,
//     })
//   );

// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//   res.status(200).send({ data: "Test message!1" });
// });

// app.post("/user", async (req: Request, res: Response): Promise<Response> => {
//   console.log(req.body);
//   const user: User = await User.create({ ...req.body });
//   return res.status(201).json(user);
// });

// app.get("/users", async (req: Request, res: Response): Promise<Response> => {
//   const allUsers: User[] = await User.findAll();
//   return res.status(200).json(allUsers);
// });

const start = async (): Promise<void> => {
  try {
    await connection.sync();
    app.listen(port, () => {
      console.log(`Server started on port ${port}!`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
