import { Request, Response } from "express";
import { DeleteUserUseCase } from "../useCases/DeleteUserUseCase";

export class DeleteUserController {
   async handleDeleteUser(request: Request, response: Response) {
      try {
         const { id } = request.params;
         const deleteUserUseCase = new DeleteUserUseCase();
         const delUser = deleteUserUseCase.deleteUser({ id });

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
}