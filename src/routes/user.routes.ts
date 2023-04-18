import { Router } from "express";
import { GetUserController } from "../modules/user/controllers/readUser/GetUserController";
import { CreateUserController } from "../modules/user/controllers/createUser/CreateUserController";

const userRoutes = Router();
const createUserController = new CreateUserController();
const getUserController = new GetUserController();
// TODO: Routes
userRoutes.post("/", createUserController.handleSendCreateUser);
userRoutes.get("/", getUserController.handleGetUsers);

export { userRoutes };
