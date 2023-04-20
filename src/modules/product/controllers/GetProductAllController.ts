import { Request, Response } from "express";
import { GetProductAllUseCase } from "../useCases/GetProductAllUseCase";

export class GetProductAllController {
   async handleGetProduct(request: Request, response: Response) {
      /*
         NOTE: Consultando todos produtos no db
      */
      const getProductAllUseCase = new GetProductAllUseCase();
      const result = await getProductAllUseCase.getProduct();

      return response.status(201).json(result);
   }
}