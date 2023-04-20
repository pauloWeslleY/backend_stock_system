import { Request, Response } from 'express';
import { CategoriesUseCase } from '../useCases/CategoriesUseCase';

const categoriesUseCase = new CategoriesUseCase();

export class CategoryController {
   // TODO: Fazendo requisição e enviando categorias pro db
   async handleCreateCategory(request: Request, response: Response){
      const { name } = request.body
      const data = await categoriesUseCase.executeCreateCategory({
         name
      });

      return response.status(201).json(data);
   }

   // NOTE: Deletando categoria no db
   async handleDeleteCategory(request: Request, response: Response) {
      try {
         const { id } = request.params;
         const delCategory = await categoriesUseCase.executeDeleteCategory({ id });

         response.status(200).json({
            message: `Category with ID ${id} has been deleted!`,
            delCategory
         });

      } catch (err) {
         response.status(500).json({
            message: "Could not delete this category!",
         });
      }
   }

   // TODO: Consultando todas categorias
   async handleReadCategories(request: Request, response: Response) {
      const result = await categoriesUseCase.executeReadCategories();

      return response.status(201).json(result);
   }
}