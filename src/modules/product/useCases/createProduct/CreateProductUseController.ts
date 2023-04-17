import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductUseController {
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