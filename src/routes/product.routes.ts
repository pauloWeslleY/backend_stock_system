import { Router } from "express";
import { GetProductAllController } from './../modules/product/useCases/getProduct/GetProductAllUseController';
import { CreateProductUseController } from "./../modules/product/useCases/createProduct/CreateProductUseController";

const productRoutes = Router();
const createProductController = new CreateProductUseController();
const getProductAllController = new GetProductAllController();
// TODO: Routes
productRoutes.post("/", createProductController.handleSendCreateProduct);
productRoutes.get("/products_all", getProductAllController.handleGetProduct);

export { productRoutes };
