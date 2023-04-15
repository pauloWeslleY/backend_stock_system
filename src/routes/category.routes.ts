import { Router } from "express";
import { CreateCategoryController } from "../modules/category/useCases/createCategory/CreateCategoryController";

const createCategoryController = new CreateCategoryController();
const categoryRoutes = Router();
categoryRoutes.post("/", createCategoryController.handleSendCreateCategory);
export { categoryRoutes };