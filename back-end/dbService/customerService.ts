import { logger } from "../config/logger";
import { Customer } from "../models/customer";

export const getCustomers = async (): Promise<Customer[] | false> => {
  try {
    const allUsers: Customer[] = await Customer.findAll();
    return allUsers;
  } catch (error) {
    logger.error(error);
    return false;
  }
};

export const createCustomer = async (
  customerData: Customer
): Promise<Customer | false> => {
  try {
    const user: Customer = await Customer.create({ ...customerData });
    return user;
  } catch (error) {
    logger.error(error);
    return false;
  }
};
