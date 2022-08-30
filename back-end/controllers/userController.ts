import express, { Application, Request, Response, NextFunction } from "express";
import { User } from "../models/users";

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const allUsers: User[] = await User.findAll();
  return res.status(200).json(allUsers);
};

//   app.get("/users", async (req: Request, res: Response): Promise<Response> => {
//     const allUsers: User[] = await User.findAll();
//     return res.status(200).json(allUsers);
//   });

//   const GetTags = async (req, res) => {
//     try {
//       let tags = await GetAll();
//       res.status(200).send(tags);
//     } catch (error) {
//       logger.error("tagController.getTags.Error" + error);
//       res.status(404).send(error);
//     }
//   };
