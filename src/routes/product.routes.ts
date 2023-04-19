import { Router } from "express";
import { GetProductAllController } from '../modules/product/controllers/readProduct/GetProductAllController';
import { CreateProductController } from "../modules/product/controllers/createProduct/CreateProductController";
import { DeleteProductController } from "../modules/product/controllers/deleteProduct/DeleteProductController";

const productRoutes = Router();
const createProductController = new CreateProductController();
const getProductAllController = new GetProductAllController();
const deleteProductController = new DeleteProductController();

// TODO: Routes
productRoutes.post("/", createProductController.handleSendCreateProduct);
productRoutes.get("/", getProductAllController.handleGetProduct);
productRoutes.delete("/:id", deleteProductController.handleDeleteProduct);

export { productRoutes };
