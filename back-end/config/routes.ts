import { getUsers } from "../controllers/userController";

interface Routes {
    user: {
      methods: string;
      path: string;
      controller: any;
    }[];
  }
  
export const routes:Routes = {
  user: [
    {
      methods: "GET",
      path: "/",
      controller: getUsers,
    },
  ],
};
