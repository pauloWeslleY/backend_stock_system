import { Router } from "express";
import { GetProductAllController } from '../modules/product/controllers/GetProductAllController';
import { CreateProductController } from "../modules/product/controllers/CreateProductController";
import { DeleteProductController } from "../modules/product/controllers/DeleteProductController";

const productRoutes = Router();
const createProductController = new CreateProductController();
const getProductAllController = new GetProductAllController();
const deleteProductController = new DeleteProductController();

// TODO: Routes
productRoutes.post("/", createProductController.handleSendCreateProduct);
productRoutes.get("/", getProductAllController.handleGetProduct);
productRoutes.delete("/:id", deleteProductController.handleDeleteProduct);

export { productRoutes };
