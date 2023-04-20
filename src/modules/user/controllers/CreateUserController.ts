import { Request, Response } from "express";
import { CreateUserUseCase } from "../useCases/CreateUserUseCase";

export class CreateUserController {
   async handleSendCreateUser(request: Request, response: Response) {
      // TODO: Enviando novo usuário
      const { name, email, password } = request.body;
      const createProductUseCase = new CreateUserUseCase();
      const data_result = await createProductUseCase.executeCreationNewUser({
         name,
         email,
         password
      });

      return response.status(201).json(data_result);
   }
}