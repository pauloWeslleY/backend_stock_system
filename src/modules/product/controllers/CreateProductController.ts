import { Request, Response } from "express";
import { CreateProductUseCase } from "../useCases/CreateProductUseCase";

export class CreateProductController {
   async handleSendCreateProduct(request: Request, response: Response) {
      /*
         TODO: Fazendo requisição e enviando produtos pro db
      */
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