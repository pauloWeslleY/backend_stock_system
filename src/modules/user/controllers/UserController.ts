import { Request, Response } from "express";
import { UsersUseCase } from "../useCases/UsersUseCase";
import { z } from "zod";

const usersUseCase = new UsersUseCase();

export class UserController {
   // TODO: Enviando novo usuário
   async handleCreateUser(request: Request, response: Response) {
      const createUserBody = z.object({
         name: z.string(),
         email: z.string().email(),
         password: z.number(),
      });

      const { name, email, password } = createUserBody.parse(request.body);
      const data_result = await usersUseCase.executeCreationUser({
         name,
         email,
         password
      });

      return response.status(201).json(data_result);
   }

   // TODO: Deletando usuário
   async handleDeleteUser(request: Request, response: Response) {
      try {
         const { id } = request.params;
         const delUser = usersUseCase.executeDeleteUser({ id });

         response.status(200).json({
            message: `Delete user ${id} with success!`,
            delUser,
         });
      } catch (error) {
         response.status(200).json({
            message: `Failed to delete user ${error}!`,
         });
      }
   }

   // TODO: Consultando usuário
   async handleReadUsers(request: Request, response: Response){
      const result = await usersUseCase.executeReadUser();

      return response.status(201).json(result);
   }
}