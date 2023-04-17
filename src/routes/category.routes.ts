import { Router } from "express";
import { CreateCategoryController } from "../modules/category/useCases/createCategory/CreateCategoryController";
import { GetCategoriesAllController } from "../modules/category/useCases/getCategories/GetCategoriesAllController";

const createCategoryController = new CreateCategoryController();
const getCategoriesAllController = new GetCategoriesAllController();

const categoryRoutes = Router();
categoryRoutes.post("/", createCategoryController.handleSendCreateCategory);
categoryRoutes.get("/categories_all", getCategoriesAllController.handleGetCategoriesAll)
export { categoryRoutes };