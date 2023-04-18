import { Request, Response } from "express";
import { CreateProductUseCase } from "../../useCases/createProduct/CreateProductUseCase";

export class CreateProductController {
   async handleSendCreateProduct(request: Request, response: Response) {
      // TODO: Enviando Produtos
      const { title, price, description, imageUrl, category_id, quantity } = request.body;
      const createProductUseCase = new CreateProductUseCase();
      const data = await createProductUseCase.createProducts({
         title,
         price,
         description,
         imageUrl,
         category_id,
         quantity
      });

      return response.status(201).json(data);
   }
}