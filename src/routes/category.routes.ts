import { Router } from "express";
import { CreateCategoryController } from "../modules/category/controllers/CreateCategoryController";
import { GetCategoriesAllController } from "../modules/category/controllers/GetCategoriesAllController";

const createCategoryController = new CreateCategoryController();
const getCategoriesAllController = new GetCategoriesAllController();

const categoryRoutes = Router();
categoryRoutes.post("/", createCategoryController.handleSendCreateCategory);
categoryRoutes.get("/", getCategoriesAllController.handleGetCategoriesAll)
export { categoryRoutes };