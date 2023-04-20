import { Request, Response } from "express";
import { ProductUseCase } from "../useCases/ProductUseCase";

const productUseCase = new ProductUseCase();

export class ProductController {
   /*
      TODO: Fazendo requisição e enviando produtos pro db
   */
   async handleCreateProduct(request: Request, response: Response) {
      const { title, price, description, imageUrl, category_id, quantity } = request.body;
      const data = await productUseCase.executeCreateProducts({
         title,
         price,
         description,
         imageUrl,
         category_id,
         quantity
      });

      return response.status(201).json(data);
   }

   /*
      NOTE: Deletando produto no db
   */
   async handleDeleteProduct(request: Request, response: Response) {
      try {
         const { id } = request.params;
         const delProduct = await productUseCase.executeDeleteProduct({ id });

         response.status(200).json({
            message: `Product with ID ${id} has been deleted!`,
            delProduct
         });

      } catch (err) {
         response.status(500).json({
            message: "Could not delete this product!",
         });
      }
   }

   /*
      NOTE: Consultando todos produtos no db
   */
   async handleReadProduct(request: Request, response: Response) {
      const result = await productUseCase.executeReadProduct();

      return response.status(201).json(result);
   }
}