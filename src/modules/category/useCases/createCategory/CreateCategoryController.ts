import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {
   async handleSendCreateCategory(request: Request, response: Response){
      // TODO: Enviando Categorias
      const { name } = request.body
      const createCategoryUseCase = new CreateCategoryUseCase();
      const data = await createCategoryUseCase.createCategory({
         name
      });

      return response.status(201).json(data);
   }
}