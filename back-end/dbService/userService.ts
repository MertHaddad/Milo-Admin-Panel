import { logger } from "../config/logger";
import { User } from "../models/user";

export const getUsers = async (): Promise<User[] | false> => {
  try {
    const allUsers: User[] = await User.findAll();
    return allUsers;
  } catch (error) {
    logger.error(error);
    return false;
  }
};

export const createUser = async (userData: User): Promise<User | false> => {
  try {
    const user: User = await User.create({ ...userData });
    return user;
  } catch (error) {
    logger.error(error);
    return false;
  }
};
