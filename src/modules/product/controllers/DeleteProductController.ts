import { Request, Response } from "express";
import { DeleteProductUseCase } from "../useCases/DeleteProductUseCase";

export class DeleteProductController {
   async handleDeleteProduct(request: Request, response: Response) {
      /*
         NOTE: Deletando produto no db
      */
      try {
         const { id } = request.params;
         const deleteProductUseCase = new DeleteProductUseCase();
         const delProduct = await deleteProductUseCase.deleteProduct({ id });

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
}
