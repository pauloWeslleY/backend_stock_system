import { DeleteUserController } from './../modules/user/controllers/DeleteUserController';
import { Router } from "express";
import { GetUserController } from "../modules/user/controllers/GetUserController";
import { CreateUserController } from "../modules/user/controllers/CreateUserController";

const userRoutes = Router();
const createUserController = new CreateUserController();
const getUserController = new GetUserController();
const deleteUserController = new DeleteUserController();

// TODO: Routes
userRoutes.post("/", createUserController.handleSendCreateUser);
userRoutes.get("/", getUserController.handleGetUsers);
userRoutes.delete("/:id", deleteUserController.handleDeleteUser);

export { userRoutes };
