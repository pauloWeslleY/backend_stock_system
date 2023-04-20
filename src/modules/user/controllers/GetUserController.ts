import { Request, Response } from "express";
import { GetUserUseCase } from "../useCases/getUserUserCase";

export class GetUserController {
   async handleGetUsers(request: Request, response: Response){
      const getUserUseCase = new GetUserUseCase();
      const result = await getUserUseCase.getUser();

      return response.status(201).json(result);
   }
}