import { Router } from "express";
import { GetProductAllController } from '../modules/product/controllers/readProduct/GetProductAllController';
import { CreateProductController } from "../modules/product/controllers/createProduct/CreateProductController";

const productRoutes = Router();
const createProductController = new CreateProductController();
const getProductAllController = new GetProductAllController();
// TODO: Routes
productRoutes.post("/", createProductController.handleSendCreateProduct);
productRoutes.get("/", getProductAllController.handleGetProduct);

export { productRoutes };
