import { Request, Response } from 'express';
import { GetCategoriesAllUseCase } from '../../useCases/readCategories/GetCategoriesAllUseCase';

export class GetCategoriesAllController {
   async handleGetCategoriesAll(request: Request, response: Response) {
      const getCategoriesAllResponse = new GetCategoriesAllUseCase();
      const result = await getCategoriesAllResponse.getCategoriesAll();

      return response.status(201).json(result);
   }
}