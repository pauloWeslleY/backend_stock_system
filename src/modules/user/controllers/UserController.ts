import { Request, Response } from "express";
import { UsersUseCase } from "../useCases/UsersUseCase";

const usersUseCase = new UsersUseCase();

export class UserController {
   async handleCreateUser(request: Request, response: Response) {
      // TODO: Enviando novo usuário
      const { name, email, password } = request.body;
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