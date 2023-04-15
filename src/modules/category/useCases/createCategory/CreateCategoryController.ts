import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {
   async handleSendCreateCategory(request: Request, response: Response){
      const { name, categoryId } = request.body
      const createCategoryUseCase = new CreateCategoryUseCase();
      await createCategoryUseCase.createCategory({
         name,
         categoryId
      });

      return response.status(201).send();
   }
}